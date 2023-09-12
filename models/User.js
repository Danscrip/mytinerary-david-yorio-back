import { Schema, model } from "mongoose";

//  Model
const userSchema = Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    photo: { type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-FEnB2wTNAKL-3QPJvn7QbTpTthxkZ8FSA&usqp=CAU' },
    birth_date: { type: Date },
    age: {type: Number},
    phone: {type: Number},
    verified: {type: Boolean, default: false},
},
{
    timestamps: true
}

)

const User = model('user', userSchema)
export default User