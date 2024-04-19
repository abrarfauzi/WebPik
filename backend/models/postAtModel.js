import mongoose from "mongoose";


const Schema = mongoose.Schema;

const postAtSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }, 
  userEmail: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  saleOrRent: {
    type: String,
    required:true
  },
  rating: {
    type: Number,
    default:2.5,    
  }
},{
    timestamps: true
});

const PostAt = mongoose.model("PostAt", postAtSchema);

export default PostAt;