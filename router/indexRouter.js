import  {Router} from 'express';
import citiesController from '../controllers/citiesControllers.js';








const indexRouter = Router()
const {getALLCities , getONECities, createONECities} = citiesController

indexRouter.get('/',(request, response, next) => {
    console.log(request);

    response.send('bienvenido a mi servidor en /api')
    })

    indexRouter.get('/cities',getALLCities) 
    indexRouter.get('/cities/one',getONECities)
    indexRouter.get('/cities/:param',getONECities) 
    indexRouter.post('/cities',createONECities)

    export default indexRouter