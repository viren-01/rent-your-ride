import { Model, DataTypes, QueryTypes } from 'sequelize'
import { sequelize } from '../../../config/dbConfig'

class Vehicle extends Model { }

Vehicle.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    vehicle_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    make: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    version: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seating_capacity: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
}, {
    sequelize: sequelize,
    tableName: 'vehicle',
    createdAt: true,
    updatedAt: true
})

class VehicleModel extends Vehicle {
    async find(params: any) {
        return new Promise(async (resolve, reject) => {
            try {
                let sql = `SELECT B.name as vehicle_type, CONCAT(make, " ", model, " ", version) as label, seating_capactiy, url, A.id as value 
                            FROM vehicle A JOIN vehicle_type B ON A.vehicle_type = B.id`
                const response = await sequelize.query(sql, { type: QueryTypes.SELECT, raw: true })
                return resolve(response)
            } catch (error) {
                reject(error)
            }
        })
    }
}

export default new VehicleModel()