const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    iCustomer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    dDate: {
      type: Date,
      Default: Date.now(),
    },
    sStatus: {
      type: String,
      enum: [
        "orderProcessing",
        "orderCancle",
        "orderDeliver",
        "orderReturned",
        "orderIntransist",
      ],
      default: "orderProcessing",
    },
    sbillingAdress: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      District: {
        type: String,
        required: true,
      },
      State: {
        type: String,
        required: true,
      },
      npincode: {
        type: Number,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    sShipingAdress: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      District: {
        type: String,
        required: true,
      },
      State: {
        type: String,
        required: true,
      },
      npincode: {
        type: Number,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    aItems: [
      {
        iProductid: {
          type: mongoose.Schema.type.ObjectId,
          ref: "Product",
          required: true,
        },
        nQuantity: {
          type: Number,
          required: true,
        },
        nPrice: {
          type: Number,
          required: true,
        },
      },
    ],
    nTotalAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports=mongoose.model("Order",orderSchema)