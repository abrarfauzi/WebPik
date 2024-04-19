import mongoose from "mongoose";
const Schema = mongoose.Schema;

const estateSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    saleOrRent: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 2.5,
    },
    price: {
        type: Number,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const Estate = mongoose.model("Estate", estateSchema);

export default Estate;
