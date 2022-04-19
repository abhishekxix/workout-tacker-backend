import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: [true, 'Please provide name'],
  },
  email: {
    type: String,
    required: true,
    validate: validator.isEmail,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
  },
  phoneNumber: {
    type: String,
    validate: validator.isMobilePhone,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

UserSchema.pre('save', async function () {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  }
});

UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  return await bcrypt.compare(candidatePassword, this.password);
};
