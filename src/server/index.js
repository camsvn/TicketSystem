const express = require("express");
const os = require("os");
const helmet = require('helmet');
const {PORT} = require('./config/config');

const app = express();

//for production
app.use(express.static("dist"));

//middleware
app.use(helmet());

//routes
app.get("/api/getUsername", (req, res) =>  
  res.send({ username: os.userInfo().username })
);

app.listen(PORT || 8080, () =>
  console.log(`Listening on http://localhost:${PORT || 8080}`)
);



