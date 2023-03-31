const mongoose = require('mongoose')

const vehicleSchema = mongoose.Schema(
  {
   
    plateNo: {
      type: String,
      required: [true, 'Please add an vehicle plate number'],
      unique: true,
   },

    driverId: {
        type: String,
        required: [true, 'Please add an driver id'],
    },

    agentId: {
        type: String,
        required: [true, 'Please add an agent id'],
    },


    vModel: {
      type: String,
      required: [true, 'Please add an model of vehicle'],
    },


    insuranceExpirationDate : {
    type: String,
    required: [true, 'Please add Insurance Expiration date '],
    },

    /*status: {
      type: String,
      enum: ['AVAILABLE', 'UNAVAILABLE'],
      default: 'AVAILABLE',
      required: [true, 'Please add a status'],
    },*/
 
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Vehicle', vehicleSchema)