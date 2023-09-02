import cities from '../cities.js';
import city from '../models/city.js';






const citiesController = {
        getALLCities: async (req, res, next) => {

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
        getONECities: async (req, res, next) => {
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
        createONECities: async (req, res, next) => {
                console.log(req.body);
                let ciudades;
                let error = null
                let success = true;

                try {


                        const ciudades = await city.create(req.body)
                        console.log(ciudades);

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
        updateOneCities: async (req, res, next) => {


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

        deleteOneCities: async (req, res, next) => {
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

export default citiesController;