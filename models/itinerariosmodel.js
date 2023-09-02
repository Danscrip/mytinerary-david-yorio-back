

import {Schema, model} from "mongoose";

const itinerariosSchema = Schema({
    country: {type: String, required: true} , 
    photo: {type: String, required: true} ,
    name: {type: String, required: true} ,
    price: {type: Number , required: true},
    duration:{type: Number , required: true},
    likes: {type: Number , required: true},
    activities: {type: String, default: "No hay itinerarios para esta ciudad" },
    hashtags: {
        type: [String],  // Tipo de datos de arreglo de cadenas
        validate: {
          validator: function (array) {
            return array.length <= 4;  // Validar que haya al menos tres elementos en el arreglo
          },
          message: "Deben proporcionarse al menos tres hashtags."
        },
        default: []  // Valor predeterminado: un arreglo vacío
      }
},{
    timestamps: true
}) 
const intinerariosmodel = model('intinerariosmodel', itinerariosSchema )

export default intinerariosmodel;

