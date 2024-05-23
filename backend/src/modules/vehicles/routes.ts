import express from 'express'
import VehicleController from './controller/VehicleController'
import validator from '../../middlewares/RequestValidator'

const router = express.Router()

router.post('/getAll',  VehicleController.getVehicles)

export default router