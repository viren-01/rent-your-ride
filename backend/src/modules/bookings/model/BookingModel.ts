import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../../../config/dbConfig'

class Booking extends Model { }

Booking.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    vehicle_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pickup_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dropoff_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    pickup_location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dropoff_location: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    sequelize: sequelize,
    tableName: 'bookings',
    createdAt: true,
    updatedAt: true
})



class BookingModel extends Booking {
    async create(params: any) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await Booking.create(params, { raw: true })
                return resolve(response)
            } catch (error) {
                reject(error)
            }
        })
    }

    async find(params: any) {
        return new Promise(async (resolve, reject) => {
            try {
                let _where: any = {}
                let { id } = params

                if (id) _where['id'] = id

                const users = await Booking.findAll({ where: _where, attributes: ['id'], raw: true })
                resolve(users)
            } catch (error) {
                reject(error)
            }
        })
    }
}

export default new BookingModel()