import http from 'http';
import app from './app';

class Server {
    private server: http.Server

    constructor() {
        this.server = http.createServer(app)
        this.start()
    }

    private start() {
        try {
            this.server.listen(8008, () => {
                console.log("Server started at port 8008")
            })   
        } catch (error) {
            console.log("error in starting server")
        }
    }
}

const server = new Server()
export default server