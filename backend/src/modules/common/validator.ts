import Joi from 'joi';

class CommonValidator {
    contact = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        description: Joi.string().required().min(20)
    })
}

export default new CommonValidator()