import mongoose from 'mongoose';

const OptionalCardioAttributeSchema = new mongoose.Schema({
  cardioSessionID: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'CardioSession',
  },
  key: {
    type: String,
    minlength: 1,
    maxlength: 30,
    required: true,
  },
  value: {
    type: String,
    minlength: 1,
    maxlength: 30,
    required: true,
  },
});

export const OptionalCardioAttribute = mongoose.model(
    'OptionalCardioAttribute',
    OptionalCardioAttributeSchema,
);
