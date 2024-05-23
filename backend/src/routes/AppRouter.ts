import express from 'express'
import vehicleRouter from '../modules/vehicles/routes'
import commonRouter from '../modules/common/routes'
import bookingRouter from '../modules/bookings/routes'

const router = express.Router()

router.use('/vehicle', vehicleRouter)
router.use('/common', commonRouter)
router.use('/booking', bookingRouter)

export default router 