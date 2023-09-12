import User from "../models/user.js";
import bcrypt from 'bcrypt';




const authController = {

    signUp: async (req, res, next) => {



        try {
            const passwordHash = bcrypt.hashSync(req.body.password, 10)
            console.log(passwordHash);
            req.body.password = passwordHash
            const existe = await User.findOne({ email: req.body.email })
            if (!existe) {
                const newUser = await User.create(req.body)
                return res.status(201).json({
                    succes: true,
                    userData: newUser,
                    message: 'sign up succesfully'

                })
            }
            return res.status(400).json({
                succes: true,

                messsage: 'email already exists '

            })


        } catch (error) {
            console.log(error);
            next(error)
        }
    },

    signIn: async (req, res, next) => {
        try {
            let { email, password } = req.body

            const userInDB = await User.findOne({ email })


            if (!userInDB) {
                throw new Error("no user exists with this email")
            }
            let passwordvalidated = bcrypt.compareSync(password, userInDB.password)
            if (!passwordvalidated) {

                throw new Error("the email/password is incorrect")

            }


            return res.status(201).json({
                succes: true,
                userData: newUser,
                message: 'sign up succesfully'

            })


        } catch (error) {
            console.log(error);
            next(error)
        }
    }

}


export default authController