import cors from 'cors';
import express, { Application } from 'express';
import './src/config/dbConfig';
import AppRouter from './src/routes/AppRouter';

class App {
    public app: Application;
    constructor() {
        this.app = express()
        this.configureMiddleware()
        this.configureRoutes()
    }

    private configureMiddleware() {
        this.app.use(cors())
        this.app.use(express.json({ limit: '5mb' }))
        
    }

    private configureRoutes() {
        this.app.get(['/', '/health'], (req, res) => {
            res.send({
                status: 200,
                message: 'success'
            })
        })
        this.app.use('/api', AppRouter)
    }
}

export default new App().app