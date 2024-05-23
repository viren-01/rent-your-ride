import { Sequelize, Options } from 'sequelize'
import { DB_CONN } from './config'

const DB_OPTIONS: Options = {
    ...DB_CONN
}

Object.freeze(DB_OPTIONS)

class DbConnection {
    public sequelize: Sequelize;

    constructor() {
        this.sequelize = new Sequelize(DB_OPTIONS)
        this.connectDB()
    }
    async connectDB() {
        try {
            await this.sequelize.authenticate()
            console.log("DB Connected....")
        } catch (error) {
            console.log(error)
            console.log(`Error in connecting DB`)
        }
    }
}

const Db = new DbConnection()
export const sequelize = Db.sequelize
