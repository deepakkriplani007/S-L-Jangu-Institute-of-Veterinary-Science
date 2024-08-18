import mongoose from "mongoose";

const attendschema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  present: {
    type: String,
    required: true,
  },
  holiday: {
    type: String,
    required: true,
  },
});

export default mongoose.model("attendmodel", attendschema);
