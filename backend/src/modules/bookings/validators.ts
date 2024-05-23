import Joi from 'joi';

class BookingValidator {
    createBooking = Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().email().required(),
        pickup_date: Joi.date().required(),
        dropoff_date: Joi.date().required(),
        pickup_location: Joi.number().required(),
        dropoff_location: Joi.number().required(),
        car: Joi.number().required(),
        phone: Joi.string().required().max(10).min(10),
        age: Joi.string().required(),
        address: Joi.string().required(),
        city: Joi.string().required(),
        zipcode: Joi.string().required(),
    })
}

export default new BookingValidator()