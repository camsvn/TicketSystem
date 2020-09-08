const express = require("express");
// const { registerUser, loginUser, logoutUser, authChecker } = require("../controllers/AuthController");
const {getTickets, 
        addTicket, 
        getDeptTickets,
        getPendingTickets,
        getAcceptedTickets, 
        getRejectedTickets,
        getDepts,
        getUsers,
        acceptTicket,
        rejectTicket,
    } = require("../controllers/TicketsController");

const router = express.Router();

router.get('/',(req,res)=>res.send("Hola! You are at the tickets API"))

router.get('/get', getTickets);
router.get('/pending', getPendingTickets);
router.get('/accepted', getAcceptedTickets);
router.get('/rejected', getRejectedTickets);

router.get('/getdepts', getDepts);
router.get('/getusers', getUsers);
router.get('/getall', getDeptTickets);
router.put('/accept', acceptTicket);
router.put('/delete', rejectTicket);

router.post('/add', addTicket);

module.exports = router;