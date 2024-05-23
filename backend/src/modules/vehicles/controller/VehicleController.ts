import { Request, Response } from "express";
import ApiController from "../../common/controller/ApiController";
import VehicleModel from "../models/VehicleModel";

class VehicleController {
    async getVehicles(req: Request, res: Response) {
        try {
            const response = await VehicleModel.find({})
            return ApiController.sendSuccessResponse(req, res, response)
        } catch (error) {
            return ApiController.sendErrorResponse(req, res, error, 500)
        }
    }
}

export default new VehicleController()