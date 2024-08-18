import mongoose from "mongoose";
import crypto from "crypto";
import validator from "validator";
import bcrypt from "bcrypt";
import { type } from "os";
const userschema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    default: "user",
  },
  scholarNumber: { type: String, required: true },
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Email is not correct",
    },
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    default: "male",
  },
  password: {
    type: String,
    required: true,
    minLength: [5, "Minimum length should be 5"],
    select: false,
  },
  passwordconfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    minLength: [5, "Minimum length should be 5"],
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: "Passwords are not the same",
    },
  },
  passwordResetToken: String,
  TokenExpires: Date,
  passwordChangedAt: Date,
  count: {
    type: Number,
    default: 0,
  },
  block: {
    type: Date,
    default: () => new Date(0),
  },
});

// what are done here..?
userschema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordconfirm = undefined;
  next();
});
userschema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.passwordChangedAt = Date.now() - 1000;

  next();
});
userschema.methods.changedPasswordAfter = function (
  jwtTimeStamp,
  passwordChangedAt
) {
  console.log(jwtTimeStamp, Date.parse(passwordChangedAt));
  console.log(jwtTimeStamp < Date.parse(passwordChangedAt));
  return jwtTimeStamp * 1000 < Date.parse(passwordChangedAt);
};
userschema.methods.generateToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  console.log(resetToken, this.passwordResetToken);
  this.TokenExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};
userschema.methods.resetpassword = function () {};

export default mongoose.model("usermodel", userschema);
