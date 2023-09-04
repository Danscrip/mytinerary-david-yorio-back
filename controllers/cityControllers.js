import town from "../models/town.js";




const cityController = {
    getALLCity: async (req, res, next) => {

            console.log(req.query);
            let { country, city } = req.query
            let query = {}



            if (country) {
                    query.country = { $regex: `^${country.trim()}`, $options: "i" };
            }


            let ciudades;
            let error = null
            let success = true;



            try {
                    ciudades = await town.find(query)


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
    getONECity: async (req, res, next) => {
            let OneCitys;
            let error = null
            let success = true;
            const { id } = req.params
            const { name } = req.body



            console.log(req.params)
            console.log(id);
            console.log(req.body);




            try {

                    OneCitys = await town.findById(id)
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
    createONECity: async (req, res, next) => {
            console.log(req.body);
            let newCategory;
            let error = null
            let success = true;

            try {


                    const newCategory = await town.create(req.body)
                   res.status(201).json({newCategory: newCategory})

                    console.log(newCategory);

            } catch (err) {
                    res.status(500).json(err)
            }


          /* res.json({
                    res: newCategory,
                    success,
                    error


            })*/
    },
    updateOneCity: async (req, res, next) => {


            let ciudades;
            let success = true;
            console.log(req.params);
            console.log(req.body);

            const { id } = req.params
            try {
                    ciudades = await town.findOneAndUpdate({ _id: id }, req.body, { new: true })

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

    deleteOneCity: async (req, res, next) => {
            const { id } = req.params
            let ciudades;
            let success = true;
            console.log(req.params);
            console.log(req.body);


            try {
                    ciudades = await town.findOneAndDelete({ _id: id })

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

export default cityController;



