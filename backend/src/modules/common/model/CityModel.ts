import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../../../config/dbConfig'

class City extends Model { }

City.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: 'cities',
    createdAt: true,
    updatedAt: true
})



class CityModel extends City {
    async find(params: any) {
        return new Promise(async (resolve, reject) => {
            try {
                const cities = await City.findAll({ attributes: [['id', 'value'], ['name', 'label']], raw: true, order: [['name', 'ASC']] })
                resolve(cities)
            } catch (error) {
                reject(error)
            }
        })
    }
}

export default new CityModel()