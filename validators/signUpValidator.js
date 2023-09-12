import joi from 'joi'
import joiPwd from    'joi-password-complexity'
const complexityOptions = {
    min: 4,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 3,
  };

export const signUpSchema = joi.object({
    email:  joi.string().email().required().messages({

        "string.empty": "el email no puede estar vacio",
        "any.required": "el campo email es requerido",
        "string.min": "el minimo es tantos caracteres",
        "string.email": "el email debe tener @ y .com"
    }),
    password: joiPwd(complexityOptions),
    name:  joi.string().min(3).max(15).messages({

        "string.min": "el minimo es tantos caracteres"
    }),
    photo: joi.string, 
     birth_date: joi.date().max(Date.now()),
     age: joi.number().min(0).max(60),
    phone: joi.number().max(8).min(4),
    verified: joi.boolean(),
    

})

