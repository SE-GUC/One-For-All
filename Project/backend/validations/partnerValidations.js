const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().required(),
            age: Joi.number().required(),
            username: Joi.string().required(),
            password: Joi.string().required(),
            
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string(),
            age: Joi.number(),
            username: Joi.string(),
            password: Joi.string(),
           
        }

        return Joi.validate(request, updateSchema)
    }, 
}