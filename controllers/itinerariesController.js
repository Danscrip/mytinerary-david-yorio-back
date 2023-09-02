import intinerariosmodel from "../models/itinerariosmodel.js";






const itinerariesController = {
    getALLItinerary: async (req, res, next) => {

            console.log(req.query);
            let { country, city: cityParam } = req.query
            let query = {}



            if (cityParam) {
                    query.city = { $regex: `^${cityParam.trim()}`, $options: "i" };
            }


            let ciudades;
            let error = null
            let success = true;



            try {
                    ciudades = await city.find(query)


            } catch (err) {
                    console.log(err);
                    success = false
                    err;
            }


            res.json({
                    res: ciudades,
                    success,
                    error


            })
    },
    getONEItinerary: async (req, res, next) => {
            let OneCitys;
            let error = null
            let success = true;
            const { id } = req.params
            const { name } = req.body



            console.log(req.params)
            console.log(id);
            console.log(req.body);




            try {

                    OneCitys = await city.findById(id)
            } catch (err) {
                    console.log(err)
                    success = false;
                    error = err;
            }


            res.json({
                    res: OneCitys,
                    success,
                    error


            })
    },
    createONEItinerary: async (req, res, next) => {
            console.log(req.body);
           /* let itinerarios;
            let error = null
            let success = true;
*/
            try {


                    const newitinnerarios = await intinerariosmodel.create(req.body)
                    res.status(201).json( {newitinnerarios: newitinnerarios} )

                    console.log(newitinnerarios);

            } catch (err) {
                    res.status(500).json(err)
            }


           /* res.json({
                    res: itinerarios,
                    success,
                    error


            })*/
    },
    updateOneItinerary: async (req, res, next) => {


            let ciudades;
            let success = true;
            console.log(req.params);
            console.log(req.body);

            const { id } = req.params
            try {
                    ciudades = await city.findOneAndUpdate({ _id: id }, req.body, { new: true })

                    res.json({
                            respuesta: ciudades,
                            success

                    })
            } catch (err) {

                    success = false;
                    next(err);

            }

            // res.send("update ok")



    },

    deleteOneItineraryy: async (req, res, next) => {
            const { id } = req.params
            let ciudades;
            let success = true;
            console.log(req.params);
            console.log(req.body);


            try {
                    ciudades = await city.findOneAndDelete({ _id: id })

                    res.json({
                            res: ciudades,
                            success

                    })
            } catch (err) {

                    success = false;
                    next(err);

            }


    },



}

export default itinerariesController;