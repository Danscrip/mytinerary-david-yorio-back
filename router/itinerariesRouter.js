import { Router } from 'express';
import itinerariesController from '../controllers/itinerariesController.js';


const itinerariesRouter = Router()
//const { getALLCity, getONECity, createONECity , updateOneCity,  deleteOneCity } = cityController

const {createONEItinerary } =  itinerariesController 



/*
itinerariesRouter.get('/', getALLCity)
itinerariesRouter.get('/:id', getONECity)
//itinerariesRouter.get('/city/:param', getONECity)

itinerariesRouter.put('/:id', updateOneCity)
itinerariesRouter.delete('/:id', deleteOneCity)
*/
itinerariesRouter.post('/',  createONEItinerary)

export default itinerariesRouter;






