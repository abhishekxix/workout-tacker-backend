import mongoose from 'mongoose';

const CardioSessionSchema = new mongoose.Schema({
  workoutSessionID: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'WorkoutSession',
  },
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true,
  },
  duration: {
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

CardioSessionSchema.post('remove', function () {
  // Delete associated documents
});

export const CardioSession = mongoose.model(
  'CardioSession',
  CardioSessionSchema
);
