import { Router } from "express";
const RegisterationRouter = Router();

/** import all controllers */
import * as regController from '../controllers/registerationController.js';
import { registerMail } from '../controllers/mailer.js'
import Auth, { localVariables } from '../middleware/auth.js';


/** POST Methods */
RegisterationRouter.route('/register').post(regController.register); // register user
RegisterationRouter.route('/registerMail').post(registerMail); // send the email
RegisterationRouter.route('/authenticate').post(regController.verifyUser, (req, res) => res.end()); // authenticate user
RegisterationRouter.route('/login').post(regController.verifyUser,regController.login); // login in app

/** GET Methods */
RegisterationRouter.route('/user/:username').get(regController.getUser) // user with username
RegisterationRouter.route('/generateOTP').get(regController.verifyUser, localVariables, regController.generateOTP) // generate random OTP
RegisterationRouter.route('/verifyOTP').get(regController.verifyUser, regController.verifyOTP) // verify generated OTP
RegisterationRouter.route('/createResetSession').get(regController.createResetSession) // reset all the variables


/** PUT Methods */
RegisterationRouter.route('/updateuser').put(Auth, regController.updateUser); // is use to update the user profile
RegisterationRouter.route('/resetPassword').put(regController.verifyUser, regController.resetPassword); // use to reset password

export default RegisterationRouter;
