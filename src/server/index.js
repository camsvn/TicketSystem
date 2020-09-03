const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoDBStore = require("connect-mongodb-session")(session);
const morgan = require("morgan");
const helmet = require('helmet');
const os = require("os");
const cors = require('cors');

//Constants
const {PORT,COOKIE_NAME,SESS_SECRET} = require('./config/config');
const { MongoURI } = require("./config/database");

const MAX_AGE = 1000 * 60 * 60 * 3; // Three hours

const app = express();

//for production
app.use(express.static("dist")); 

// Below corsOptions are for Local development
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200 
}

// Below corsOptions work in deployment as Docker containers
const corsOptionsProd = {
  origin: 'http://localhost',
  credentials: true,
  optionsSuccessStatus: 200
}

//Connecting Database
mongoose
  .connect(MongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log("ERROR CONNECTING DB, ",err));

//Setting up connect-mongodb-session store
const mongoDBstore = new MongoDBStore({
  uri: MongoURI,
  collection: "mySessions"
});

//middleware
  // for Express Bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
  // for Express-Session
app.use(
  session({
    name: COOKIE_NAME,
    secret: SESS_SECRET,
    resave: true,
    saveUninitialized: false,
    store: mongoDBstore,
    cookie: {
      maxAge: MAX_AGE,
      sameSite: false,
      secure: true
    }
  })
);

app.use(morgan("dev"));
app.use(helmet());
app.use(cors(corsOptions));

//routes
app.get("/api/getUsername", (req, res) =>  
  res.send({ username: os.userInfo().username })
);

app.get("/api/users", (req, res) => res.send("Hello Darkness My Old Friend!!"));

app.listen(PORT || 8080, () =>
  console.log(`Listening on http://localhost:${PORT || 8080}`)
);



