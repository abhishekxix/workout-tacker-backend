import mongoose from 'mongoose';

const DailyStatSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
    validate: {
      validator: function(v: number) {
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

DailyStatSchema.post('remove', async function() {
  // Delete associated documents
});

export const DailyStat = mongoose.model('DailyStat', DailyStatSchema);
