import { Schema } from "mongoose";
import { signUpSchema } from "../validators/signUpValidator.js"

const validator = (Schema) => (req, res, next) => {
   const validation = signUpSchema.validate({
        email: req.body. email,
        password: req.body.password,
        name: req.body.name,
        photo: req.body.photo,
        birth_date: req.body.birth_date,
        age: req.body.age,
        phone: req.body.phone,
        verified: req.body.verified,
    }, {abortEarly: true} )

    if(validation.error){
        console.log(validation);
        return res.json(validation.error)
        return
    }
 return next()
}


export default validator