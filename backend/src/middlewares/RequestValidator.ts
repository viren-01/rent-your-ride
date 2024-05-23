import  { Schema } from "joi";
import { NextFunction, Request, Response } from "express";
import ApiController from "../modules/common/controller/ApiController";

class RequestValidator {
    validate(schema: Schema, part?: string) {
        return (req: Request, res: Response, next: NextFunction) => {
            try {
                const { error } = schema.validate(part === 'query' ? req.query : req.body)
                if (error) {
                    let newErr = error.details.map((detail: { message: String }) => detail.message)
                    return ApiController.sendErrorResponse(req, res, newErr, 400)
                }
                next()
            } catch (error) {
                next(error)
            }
        }
    }
}

export default new RequestValidator().validate