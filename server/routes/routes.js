import express from 'express'
import {Register,Login,Auth} from '../controller/userController.js'
const router = express.Router()
import {body} from 'express-validator'
import { VerifyUser } from '../middleware/VerifyUser.js'
import { createContact, getContacts } from '../controller/contactController.js'
//User Routes
router.post('/register',[
    body('name').trim().notEmpty().withMessage("Name Should not be Empty"),
    body('email').trim().notEmpty().withMessage("Email Should Not Be Empty")
     .isEmail().withMessage("Invalid Email!!"),
    body('password').trim().notEmpty().withMessage("Password Should Not Be Empty")
],Register)
router.post('/login',[
    body('email').trim().notEmpty().withMessage("Email Should Not Be Empty")
     .isEmail().withMessage("Invalid Email!!"),
    body('password').trim().notEmpty().withMessage("Password Should Not Be Empty")
],Login)

router.get('/verify',VerifyUser,Auth)

//Contact Routes
router.post('/add-contact',VerifyUser,createContact)
router.get('/contacts',VerifyUser,getContacts)

export {router as Router}
