const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().required(),
            address: Joi.string().required(),
            city: Joi.string().required(),
            country: Joi.string().required(),
            time: Joi.string().required(),
            member: Joi.string().required(),
            lifecoach: Joi.string().required(),
            
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().required(),
            address: Joi.string().required(),
            city: Joi.string().required(),
            country: Joi.string().required(),
            time: Joi.string().required(),
            member: Joi.string().required(),
            lifecoach: Joi.string().required(),

        }

        return Joi.validate(request, updateSchema)
    }, 
}
