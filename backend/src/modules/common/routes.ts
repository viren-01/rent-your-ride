import express from 'express'
import CommonController from './controller/CommonController'

const router = express.Router()

router.get('/getCities',  CommonController.getCities)

export default router