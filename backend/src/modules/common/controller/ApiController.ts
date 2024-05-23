import { Request, Response } from "express";

class ApiController {
    sendSuccessResponse(req: Request, res: Response, data: any, message?: string) {
        try {
            res.send({
                status: 200,
                message: message ?? 'success',
                data
            })
        } catch (error) {
            res.status(500).send({
                status: 500,
                message: 'error',
                error
            })
        }
    }

    sendErrorResponse(req: Request, res: Response, error: any, status?: any) {
        try {
            res.send({
                status: status ?? 400,
                message: status === 500 ? 'INTERNAL SERVER ERROR' : typeof error === 'string' ? error : 'error',
                error
            })
        } catch (error) {
            res.status(500).send({
                status: 500,
                message: 'error',
                error
            })
        }
    }
}

export default new ApiController()