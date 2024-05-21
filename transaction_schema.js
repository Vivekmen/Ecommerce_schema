const mongoose=require('mongoose');

const transactionSchema=new mongoose.Schema({
    iOrderid:{
        type:mongoose.Schema.Types.ObjectId,ref:"Order",required:true
    },
    dTransactionDate:{
        type:Date,
        default:Date.now()
    },
    nAmount:{
        type:Number,
        required:true
    },
    ePayment_method:{type:String,required:true},
    ePayments_Status:{type:String,enum:["Failed","Processing","Suceess"],default:"Processing"}
},{timestamps:true})

module.exports=mongoose.model("Transaction",transactionSchema)