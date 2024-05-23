import express from 'express'
import UserController from './controller/UserController'
import validator from '../../middlewares/RequestValidator'
import UserSchema from './validators'

const router = express.Router()

router.post('/signup', validator(UserSchema.signup), UserController.signup)
router.post('/signin', validator(UserSchema.signin), UserController.signin.bind(UserController))

export default router