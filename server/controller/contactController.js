import express from "express";
import { ContactModel } from '../models/Contact.js'
import { UserModel } from "../models/User.js";


const createContact = async (req,res)=>{
  const {gametitle,
    age,
    gender,
    category,
    subcategory,
    howtoplay,
    benefitsofplaying,
    itemsrequied,
    url,
    score,
    level}= req.body
  try{
  const newContact= new ContactModel({
    gametitle,
    age,
    gender,
    category,
    subcategory,
    howtoplay,
    benefitsofplaying,
    itemsrequied,
    url,
    score,
    level,
    postedBY:req.user._id
  })
  const result = await newContact.save()
  return res.status(201).json({success:true,...result._doc})
}catch(err){
    return res.status(500).json(err.message)
}
}
const getContacts = async (req,res)=>{
    try{
      const contacts = await ContactModel.find({postedBY:req.user._id})
      return res.status(200).json({success:true,contacts})
    }catch(err){
      return res.status(500).json({error:err.message})
    }
}

//new Code
// const createContact= async (req, res) => {
//   try {
//     const { name,email,phone,address,id } = req.body;
//     const existingUser = await UserModel.findById(id);
//     if (existingUser) {
//       const model = new ContactModel({name:req.user.name,email:req.user.email,phone,address,postedBy:existingUser });
//       await model.save().then(() => res.status(200).json({model}));
//       existingUser.model.push(model);
//       existingUser.save();
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
export {createContact,getContacts}