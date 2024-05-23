import Joi from 'joi';

class UserValidator {
    signup = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })

    signin = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
}

export default new UserValidator()