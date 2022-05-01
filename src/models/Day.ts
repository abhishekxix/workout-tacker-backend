import mongoose from 'mongoose';

const DaySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
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
  userID: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

DaySchema.post('remove', async function () {
  // Delete associated documents
});

export const Day = mongoose.model('Picture', DaySchema);
