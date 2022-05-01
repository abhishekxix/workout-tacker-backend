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
        return v > 0;
      },
      message: '{VALUE} should be positive and non zero',
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
