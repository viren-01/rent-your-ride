import { Request, Response } from "express";
import ApiController from "../../common/controller/ApiController";
import BookingModel from "../model/BookingModel";
import UserModel from "../../user/model/UserModel";
import UserController from "../../user/controller/UserController";
import { BOOKING_TEMPLATE } from "../../../constants/constant";
import MailerService from "../../../services/MailerService";
import { format } from 'date-fns';
import CityModel from "../../common/model/CityModel";
import CommonController from "../../common/controller/CommonController";
 
class BookingController {
    async createBooking(req: Request, res: Response) {
        try {
            let params = req.body
            let { email, firstname,
                lastname, age,
                phone, address,
                city, zipcode,
                car, pickup_date,
                dropoff_date, pickup_location,
                dropoff_location

            } = params

            let user: any = await UserModel.find({
                email
            })
            user = user?.[0] || null

            //create user if not exists
            if (!user) {
                const defaultPassword = 'Abcd@123'
                const hash = UserController.generatePasswordHash({ password: defaultPassword })
                const userObj = {
                    firstname, lastname,
                    email, phone,
                    age, salt: hash.salt,
                    password: hash.password,
                    address, city,
                    zipcode
                }

                user = await UserModel.create(userObj)

            }

            //create booking
            let booking = {
                vehicle_id: car,
                pickup_date,
                dropoff_date,
                pickup_location,
                dropoff_location,
                user_id: user.id
            }
            await BookingModel.create(booking)

            //fetch city
            const cities: any = await CityModel.find({})
            const pickupCity = cities?.find((city: any) => city.id == pickup_location)?.label || ``
            const dropoffCity = cities?.find((city: any) => city.id == dropoff_location)?.label || ``

            //send email for booking confirmation
            //replace variables from template
            let templateVariables = {
                customer_name: firstname,
                car_model: car,
                start_date: pickupCity + " " + format(pickup_date, 'dd-MM-yyyy HH:mm:ss'),
                end_date: dropoffCity + " " + format(dropoff_date, 'dd-MM-yyyy HH:mm:ss')
            }
            const template = CommonController.replaceVariablesInTemplate(BOOKING_TEMPLATE, templateVariables)

            //send email
            let mailParams = {
                email,
                text: template,
                subject: 'Booking Confirmation: Rent Your Ride'
            }
            MailerService.sendMail(mailParams)

            let msg = `Booking created successfully, Please check your email for updates`
            return ApiController.sendSuccessResponse(req, res, null, msg)
        } catch (error) {
            return ApiController.sendErrorResponse(req, res, error, 500)
        }
    }
}

export default new BookingController()