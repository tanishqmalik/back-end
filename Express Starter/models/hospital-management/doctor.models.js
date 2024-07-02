import mongoose from "mongoose"
const DoctorSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  Salary:{
    type: Number,
    required: true
  },
  qualification:{
    type: String,
    required:true
  },
  experience: {
    type: Number,
    default :0
  },
  worksInHospitals:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital"
    }
  ]
}, {timestamps:true})
export const Doctor = mongoose.model("Doctor", DoctorSchema)