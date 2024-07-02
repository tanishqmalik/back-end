import mongoose from "mongoose"
const sub_todo = new mongoose.Schema({
  content:{
    type: String,
    required:true
  },
  complete: {
    type : Boolean,
    default: false
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {timestamps:true})
export const SubTodo = mongoose.model("SubTodo", sub_todo)