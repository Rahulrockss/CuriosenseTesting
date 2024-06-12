import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  gametitle: {
    type: String,
    require: true,
    unique: true,
  },
  image:{
    type:String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },

  gender: {
    type: String,
    require: true,
  },

  category: {
    type: String,
    require: true,
  },

  howtoplay: {
    type: String,
    require: true,
  },

  benefitsofplaying: {
    type: String,
    require: true,
  },

  itemsrequied: {
    type: String,
    require: true,
  },

  url: {
    type: String,
    require: true,
  },

  score: {
    type: String,
    require: true,
  },
  level: {
    type: String,
    require: true,
  },
  // gameIdeaBy:
  // {
  //   type:mongoose.Schema.Types.ObjectId,ref:'User'
  // },

  postedBY:
        {
          type: mongoose.Types.ObjectId,
          ref: "User",
        },
       
  });

const ContactModel = mongoose.model('Contact', ContactSchema);
export {ContactModel}