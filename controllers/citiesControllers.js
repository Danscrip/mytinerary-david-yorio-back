import cities from '../cities.js';
import city from '../models/city.js';



const citiesController = {
        getALLCities: (request, response, next) => {



                response.json({
                        response: cities,
                        success: true,
                        error: null


                })
        },
        getONECities: (request, response, next) => {



                console.log(request.params);

                response.json({
                        response: cities[0],
                        success: true,
                        error: null


                })
        },
        createONECities: (req, res, next) => {
console.log(req.body);

                try {
                        city.create(req.body)
                } catch (error) {

                }


                res.json({
                        response: cities,
                        success: true,
                        error: null


                })
        }



}

export default citiesController;