const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    sName: { type: String,require: true },
    iCatagoryId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"Category",
         require:true   
    },
    sDescription: { 
        type: String, 
        trim: true, 
        require: true 
    },
    nPrice: { 
        type: Number, 
        required: true 
    },
    nStock: { 
        type: Number, 
        default: 0 
    },
    aImages:[String],
     oAttributes:{
      sColor:String,
      sSize:string,
      sWeight:String
     }
  },
  { timestamps: true}
);

module.exports = mongoose.model("Product", productSchema);
