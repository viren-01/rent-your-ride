import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../../../config/dbConfig'

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zipcode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salt: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: sequelize,
    tableName: 'user',
    createdAt: true,
    updatedAt: true
})



class UserModel extends User {
    async create(params: any) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await User.create(params, { raw: true })
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
                let { email } = params

                if (email) _where['email'] = email

                const users = await User.findAll({ where: _where, attributes: ['id', 'email', 'password', 'salt'], raw: true })
                resolve(users)
            } catch (error) {
                reject(error)
            }
        })
    }
}

export default new UserModel()