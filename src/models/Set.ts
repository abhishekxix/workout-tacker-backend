import mongoose from 'mongoose';

const SetSchema = new mongoose.Schema({
  liftID: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Lift',
  },
  numReps: {
    type: Number,
    required: true,
    validate: {
      validator: function (v: number) {
        return Number.isInteger(v) && v > 0;
      },
      message: '{VALUE} is not a positive integer value',
    },
  },
  weight: {
    type: Number,
    required: true,
    validate: {
      validator: function (v: number) {
        return Number.isInteger(v) && v > 0;
      },
      message: '{VALUE} is not an integer value',
    },
  },
});

export const Set = mongoose.model('Set', SetSchema);
