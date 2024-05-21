const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    sFirstName: {
      type: String,
      required: true,
    },
    sLastName: {
      type: String,
      required: true,
    },
    sEmail: {
      type: String,
      required: true,
      unique: true,
    },
    hPassword: {
      type: String,
      required: true,
    },
    oAddress: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      District: {
        type: String,
      },
      State: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    nPhone_no: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
