import { Router } from 'express';
import citiesRouter from './citiesrouter.js';
import cityRouter from './cityRouter.js';
 import itinerariesRouter from './itinerariesRouter.js'
const indexRouter = Router()











indexRouter.get('/', (req, res, next) => {
    console.log(request);

    response.send('bienvenido a mi servidor en /api')
})
indexRouter.use('/cities', citiesRouter)
indexRouter.use('/city', cityRouter)
indexRouter.use('/itinerary', itinerariesRouter)

export default indexRouter