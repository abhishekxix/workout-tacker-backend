import mongoose from 'mongoose';

const DaySchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  weight: {
    type: Number,
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
