export const PORT = process.env.PORT || 8000

export const DB_CONN: {} = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'password',
    dialect: process.env.DB_DIALECT || 'mysql',
    database: process.env.DB_NAME || 'rent-your-ride'
}

export const JWT_SECRET = process.env.JWT_SECRET || 'rent-your-ride-@123!@#$%^&'
