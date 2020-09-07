const express = require("express");
// const { registerUser, loginUser, logoutUser, authChecker } = require("../controllers/AuthController");
const {getTickets, addTicket, getDeptTickets} = require("../controllers/TicketsController");

const router = express.Router();

router.get('/',(req,res)=>res.send("Hola! You are at the tickets API"))

router.get('/get', getTickets);

router.get('/getall', getDeptTickets);

router.post('/add', addTicket);

module.exports = router;