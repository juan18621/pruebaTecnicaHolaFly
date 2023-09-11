const Joi = require('joi'); 

const peopleSchema = Joi.object().keys({ 
    name: Joi.string().required(),
    mass: Joi.string().required(),
    height: Joi.string().required(),
    homeworld_name: Joi.string().required(),
    homeworld_id: Joi.string().required(),
}); 


module.exports = peopleSchema;
