import { Router } from 'express';
import cityController from '../controllers/cityControllers.js';

const cityRouter = Router()
const { getALLCity, getONECity, createONECity , updateOneCity,  deleteOneCity } = cityController





cityRouter.get('/', getALLCity)
cityRouter.get('/:id', getONECity)
//cityRouter.get('/city/:param', getONECity)
cityRouter.post('/', createONECity)
cityRouter.put('/:id', updateOneCity)
cityRouter.delete('/:id', deleteOneCity)




export default cityRouter