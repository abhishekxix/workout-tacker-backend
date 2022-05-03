import mongoose from 'mongoose';

const LiftSchema = new mongoose.Schema({
  workoutSessionID: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'WorkoutSession',
  },
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  type: {
    type: String,
    required: true,
    enum: ['bodyweight', 'dumbbell', 'barbell', 'kettlebell', 'cable', 'other'],
  },
});

LiftSchema.post('remove', async function() {
  // Delete associated documents
});

export const Lift = mongoose.model('Lift', LiftSchema);
