const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  to:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  isPending: {
    type:Boolean,
    default: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;
