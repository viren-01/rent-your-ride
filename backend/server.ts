import http from 'http';
import app from './app';
import axios from 'axios'

class Server {
    private server: http.Server
    private port: string

    constructor() {
        this.server = http.createServer(app)
        this.port = process.env.PORT || '8008'
        this.start()
    }

    private start() {
        try {
            this.server.listen(this.port, () => {
                console.log("Server started at port 8008")
                if (process.env.ENV === 'PROD') {
                    //self ping for render
                    setInterval(() => {
                        let url = `${process.env.HOST}/health`
                        axios.get(url).then((res) => {
                            console.log("Self Request Made...")
                        })
                    }, 840000)
                }
            })   
        } catch (error) {
            console.log("error in starting server")
        }
    }
}

const server = new Server()
export default server