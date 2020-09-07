const Joi = require('@hapi/joi');

const user = Joi.string().required().messages({
  'string.empty': `User cannot be an empty field`,
});

const department = Joi.string().required().messages({
  'string.empty': `Department cannot be an empty field`,
});

const subject = Joi.string().required().messages({
  'string.empty': `Subject cannot be an empty field`,
});

const message = Joi.string().required().messages({
  'string.empty': `Message cannot be an empty field`,
});


exports.ticketSchema = Joi.object({ subject, message});