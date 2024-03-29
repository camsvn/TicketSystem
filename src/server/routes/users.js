const express = require("express");
const { registerUser, loginUser, logoutUser, authChecker } = require("../controllers/AuthController");

const router = express.Router();

router.get('/',(req,res)=>res.send("Hola! You are at the right place"))

// Registers a new User
router.post("/register", registerUser );

// Logs In a User, creates session in mongo store
// and returns a cookie containing sessionID, also called "session-id"
router.post("/login", loginUser );

// Log out user by deleting session from store
// and deleting cookie on client side
// Needs cookie containing sessionID to be attached to request
router.delete("/logout", logoutUser );

// Check if user is Authenticated by reading session data
// Needs cookie containing sessionID
router.get("/authchecker", authChecker );

module.exports = router;