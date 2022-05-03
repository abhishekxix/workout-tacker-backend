import mongoose from 'mongoose';
import validator from 'validator';

const PhotoSchema = new mongoose.Schema({
  day: {
    type: mongoose.Types.ObjectId,
    ref: 'DailyStat',
    required: true,
  },
  label: {
    type: String,
    minlength: 1,
    maxlength: 100,
  },
  url: {
    type: String,
    validate: validator.isURL,
    required: true,
  },
});

export const Photo = mongoose.model('Photo', PhotoSchema);
