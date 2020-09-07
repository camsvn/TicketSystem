const mongoose = require('mongoose');
const Ticket = require("../models/Ticket"); // Ticket model
const { ticketSchema } = require('../utils/ticketValidations');

exports.getTickets = (req, res) => {
    const sessUser = req.session.user;
    if (sessUser) {
    //   Ticket.find({to: {department: sessUser.id.department}})
      Ticket.find({to: sessUser.id })
      .populate('from', 'id name department email')
    // .populate({
    //     path: 'from',
    //     select: 'name department',
    //     match: {department: {$eq: "Department 2"}}
    // })
      .then(tickets => res.json(tickets))
      .catch(err => res.status(400).json('Error' + err))
    } else {
      return res.status(401).json({ msg: "Unauthorized" });
    }
  };

  exports.getDeptTickets = (req, res) => {
    const sessUser = req.session.user;
    if (sessUser) {
      Ticket.aggregate([
          {
            $lookup: {
            from: 'users',
            localField: 'to',
            foreignField: '_id',
            as: 'to'
            }
          },
          {
            $lookup: {
            from: 'users',
            localField: 'from',
            foreignField: '_id',
            as: 'from'
            }
          },
          {
            $match:{
                'to.department' : sessUser.department,
                'isPending': true,
            }
          },
          {$unwind: '$to'},
          {$unwind: '$from'},
          {
            $project:{
                "to.password": 0,
                "to.date":0,
                "to.email":0,
                "to.__v":0,
                "from.password": 0,
                "from.date":0,
                "from.email":0,
                "from.__v":0
            }
          },
          {
            $sort: {date: -1}
          }
      ])
      .then(tickets => res.json(tickets))
      .catch(err => res.status(400).json('Error' + err))
    } else {
      return res.status(401).json({ msg: "Unauthorized" });
    }
  };

exports.addTicket = (req,res) => {
    const {subject, message} = req.body;

    const sessUser = req.session.user;
    const users = ["5f55b741d1825941a0e7c474", "5f55ba47bd660233e4d207a9"];
    const random = Math.floor(Math.random() * users.length) ;
    console.log('Send To', random);
    if(sessUser){
        const result = ticketSchema.validate({subject, message});
        // console.log(result);
        // console.log(sessUser);
        if(!result.error){
            const newTicket = new Ticket({
                from: sessUser.id,
                to: users[random],
                subject,
                message,
            })

            newTicket.save()
            .then(data => res.json("Ticket Successfully Added"))
            .catch(err => res.status(400).json(err))
        } else {
            return res.status(422).json(result.error.details[0].message)
        }        
    }else{
        return res.status(401).json({msg: "Unauthorized"})
    }
}