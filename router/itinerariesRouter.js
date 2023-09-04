import { Router } from 'express';
import itinerariesController from '../controllers/itinerariesController.js';


const itinerariesRouter = Router()
const { getALLItinerary, getONEItinerary, createONEItinerary , updateOneItinerary,  deleteOneItinerary } = itinerariesController

//const {createONEItinerary } =  itinerariesController 




itinerariesRouter.get('/', getALLItinerary)
itinerariesRouter.get('/:id', getONEItinerary)
//itinerariesRouter.get('/city/:param', getONEItinerary)
itinerariesRouter.post('/',  createONEItinerary)
itinerariesRouter.put('/:id', updateOneItinerary)
itinerariesRouter.delete('/:id', deleteOneItinerary)



export default itinerariesRouter;






