import { Md5 } from 'ts-md5'
import { Request, Response } from "express"
import JWT from 'jsonwebtoken'
import UserModel from "../model/UserModel"
import ApiController from "../../common/controller/ApiController"
import { JWT_SECRET } from '../../../config/config'

class UserController {
    async signup(req: Request, res: Response) {
        try {
            let params = req.body
            let { password } = params

            const hash = this.generatePasswordHash({ password })

            let user = {
                ...params,
                salt: hash.salt,
                password: hash.password
            }

            const response: any = await UserModel.create(user)
            if (response) {
                return ApiController.sendSuccessResponse(req, res, { user_id: response.id }, 'User Created Successfully')
            }
            return ApiController.sendErrorResponse(req, res, 'error occured', 400)
        } catch (err) {
            return ApiController.sendErrorResponse(req, res, err, 500)
        }
    }

    async signin(req: Request, res: Response) {
        try {
            let params = req.body
            let { email, password } = params

            let user: any = await UserModel.find({ email })
            if (!user?.length) return ApiController.sendErrorResponse(req, res, 'User not found', 400)

            user = user[0]
            const hashedPassword = this.generatePasswordHash({ password, salt: user.salt })

            if (hashedPassword.password !== user.password) return ApiController.sendErrorResponse(req, res, 'Invalid password', 400)

            const token = this.generateToken({ ...user })
            return ApiController.sendSuccessResponse(req, res, { token })

        } catch (error) {
            console.log(error);
            
            return ApiController.sendErrorResponse(req, res, error, 500)
        }
    }

    generatePasswordHash(params: { password: string, salt?: string }) {
        let { salt, password } = params
        let newSalt = salt ? salt : Math.floor(Math.random() * 1000) + ":" + Date.now()
        let passwordHash = password + newSalt
        passwordHash = Md5.hashStr(passwordHash).toString()

        return { password: passwordHash, salt: newSalt }
    }

    generateToken(params: any) {
        try {
            const token = JWT.sign(params, JWT_SECRET, { expiresIn: '1d' })
            return token
        } catch (error) {
            throw error
        }
    }
}

export default new UserController()