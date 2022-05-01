import mongoose from 'mongoose';
import validator from 'validator';

const PictureSchema = new mongoose.Schema({
  day: {
    type: mongoose.Types.ObjectId,
    ref: 'Day',
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

export const Picture = mongoose.model('Picture', PictureSchema);
