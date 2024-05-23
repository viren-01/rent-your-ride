import { Request, Response } from "express"
import CityModel from "../model/CityModel"
import ApiController from "../../common/controller/ApiController"

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
}

export default new CommonController()