import mongoose from "mongoose";

const Schema = mongoose.Schema;

const favouriteSchema = new Schema({
    // estate: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "Estate",
    // },
    userId: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
 }, {
    timestamps: true,
});

const Favourite  = mongoose.model("Favourite", favouriteSchema); 
export default Favourite;