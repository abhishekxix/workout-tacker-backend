import mongoose from 'mongoose';

export const MeasurementSchema = new mongoose.Schema({
  day: {
    type: mongoose.Types.ObjectId,
    ref: 'DailyStat',
    required: true,
  },
  part: {
    type: String,
    minlength: 1,
    maxlength: 50,
    required: true,
  },
  measurement: {
    type: Number,
    required: true,
    validate: {
      validator: function(v: number) {
        return Number.isInteger(v) && v > 0;
      },
      message: '{VALUE} is not an integer value',
    },
  },

});
