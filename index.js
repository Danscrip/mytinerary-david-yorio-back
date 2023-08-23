import 'dotenv/config.js'
import express from "express";
import indexRouter from "./router/indexRouter.js";
import cors from 'cors'
import './config/database.js'




const server = express()
server.use(cors())
server.use(express.json())

server.use('/api', indexRouter)

server.get('/', (request, response, next) => {

    response.send('bienvenido a mi servidor en /')
})

/*server.post('/',(request, response, next) => {

        response.send('bienvenido a mi servidor')
        })
        server.put('/',(request, response, next) => {

            response.send('bienvenido a mi servidor')
            })
            server.delete('/',(request, response, next) => {

                response.send('bienvenido a mi servidor')
                })*/


server.listen(3000, () => {

    console.log("servidor escuchando en el puerto 3000");
})

