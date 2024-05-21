const mongoose=require('mongoose');

const categorySchema=new mongoose.Schema({
    sCategoryName:{
      type:String,
      required:true
    },
    sCategoryDescription:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports=mongoose.model('Category',categorySchema);