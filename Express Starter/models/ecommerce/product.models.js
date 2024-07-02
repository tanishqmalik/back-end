import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
  description:{
    required:true,
    type: String
  },
  name:{
    required:true,
    type: String
  },
  productImage: {
    type:String,
    unique: true
  },
  price:{
    type: Number,
    default:0
  },
  Stock:{
    default:0,
    type: Number
  },
  Category:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

},{timestamps:true})
export const Product = mongoose.model("Product", ProductSchema)

