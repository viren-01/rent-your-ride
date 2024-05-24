import { Request, Response } from "express"
import CityModel from "../model/CityModel"
import ApiController from "../../common/controller/ApiController"
import MailerService from "../../../services/MailerService"

class CommonController {
    async getCities(req: Request, res: Response) {
        try {
            const response = await CityModel.find({})
            return ApiController.sendSuccessResponse(req, res, response, 'success')
        } catch (err) {
            return ApiController.sendErrorResponse(req, res, err, 500)
        }
    }

    replaceVariablesInTemplate(template: string, variables: any) {
        return template.replace(/{{(\w+)}}/g, (match, variable) => {
            return variables.hasOwnProperty(variable) ? variables[variable] : match
        })
    }

    async contact(req: Request, res: Response) {
        try {
            let params = req.body
            let { email, name, description } = params

            let mailParams = {
                email,
                text: name + " Wrote \n" + description,
                subject: 'Rent Your Ride: Someone Wrote a feedback',
                type: 'contact'
            }
            MailerService.sendMail(mailParams)
            return ApiController.sendSuccessResponse(req, res, "", 'Thanks for writing to us, we will get back soon')
        } catch (error) {
            return ApiController.sendErrorResponse(req, res, error, 500)
        }
    }
}

export default new CommonController()