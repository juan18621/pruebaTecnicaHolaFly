const Joi = require('joi'); 

const getCharacterWeigthSchema = Joi.object().keys({ 
    planetId: Joi.string().alphanum().required(),
    characterId: Joi.string().alphanum().required(),
}); 


module.exports = getCharacterWeigthSchema;