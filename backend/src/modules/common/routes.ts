import express from 'express';
import CommonController from './controller/CommonController';
import validator from '../../middlewares/RequestValidator';
import CommonValidator from './validator';

const router = express.Router()

router.get('/getCities',  CommonController.getCities)
router.post('/contact',  validator(CommonValidator.contact), CommonController.contact)

export default router