import mongoose from 'mongoose';

const WorkoutSessionSchema = new mongoose.Schema({
  day: {
    type: mongoose.Types.ObjectId,
    ref: 'Day',
    required: true,
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: false,
  },
});

WorkoutSessionSchema.post('remove', async function() {
  // Delete associated documents
});

export const WorkoutSession = mongoose.model(
    'WorkoutSession',
    WorkoutSessionSchema,
);
