const Joi = require('joi'); 

const planetSchema = Joi.object().keys({ 
    name: Joi.string().required(),
    gravity: Joi.string().required(), 
}); 


module.exports = planetSchema;
