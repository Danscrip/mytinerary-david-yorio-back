import {Schema, model} from "mongoose";

const citySchema = Schema({
    country: {type: String, required: true} ,
    fundation: {type: String, required: true} ,
    population: {type: Number , required: true},
    photo: {type: String, required: true} ,
    city: {type: String, required: true} ,
    description: {type: String, required: true},
    smalldescription: {type: String, required: true} ,
    featuredLocation: {type: String, required: true}
},{
    timestamps: true
}) 
const city = model('city', citySchema )

export default city


