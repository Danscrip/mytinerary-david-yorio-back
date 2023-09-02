import { Router } from 'express';
import citiesController from '../controllers/citiesControllers.js';
const citiesRouter = Router()
const { getALLCities, getONECities, createONECities , updateOneCities,  deleteOneCities } = citiesController




citiesRouter.get('/', getALLCities)
citiesRouter.get('/:id', getONECities)
//citiesRouter.get('/cities/:param', getONECities)
citiesRouter.post('/', createONECities)
citiesRouter.put('/:id', updateOneCities)
citiesRouter.delete('/:id', deleteOneCities)




export default citiesRouter