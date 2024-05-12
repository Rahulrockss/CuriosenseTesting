import express from 'express'
import dotenv from 'dotenv'
import { UserModel } from './models/User.js'
import  {Router} from './routes/routes.js'
import cors from 'cors'
import './config/db.js'
// import userRouter from './routes/routes.js'
const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())

dotenv.config({path:"./config/.env"})
// app.post('/register',async (req,res)=>{
//    const errors = validationResult(req)
//    if(!errors.isEmpty()){
//        return res.status(400).json({errors:errors.array()})
//    }
//    const {name,email,password} = req.body;
//    try{
//     const userExist = await UserModel.findOne({email})
//     if(userExist){
//         return res.status(400).json({
//            errors:[{msg: 'User already Exist'}],
// })
//     }
//     const hashPassword = await bcrypt.hash(password, 12)
//     const newUser = new UserModel({name,email,password:hashPassword})
//     const result = await newUser.save()
//     result._doc.password=undefined;
//     return res.status(201).json({success:true,...result._doc})
//    }catch(err){
//     console.log(err)
//     return res.status(500).json({error:err.message})
//    }
//  })
app.use('/curiosense',Router)
app.listen(process.env.PORT,()=>{
    console.log("PORT is Running")
})

