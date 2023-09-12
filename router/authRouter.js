import { Router } from 'express';
import authController from '../controllers/authController.js';
import { signUpSchema } from '../validators/signUpValidator.js';
const authRouter = Router()

import validator from '../midlewares/validator.js'
const {signUp} = authController



authRouter.post('/',  validator(signUpSchema), signUp )




export default authRouter;