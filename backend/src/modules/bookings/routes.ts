import express from 'express'
import BookingController from './controller/BookingController'
import validator from '../../middlewares/RequestValidator'
import BookingSchema from './validators'

const router = express.Router()

router.post('/create', validator(BookingSchema.createBooking), BookingController.createBooking)

export default router