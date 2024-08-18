import express from "express";
import attendmodel from "../models/attendmodel.js";
import fetchuser from "../middleware/fetchuser.js";
const Router = express.Router();
Router.get("/", async (req, res) => {
  try {
    const all = await attendmodel.find();
    res.status(200).json(all);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
Router.post("/add", async (req, res) => {
  try {
    const attend = await attendmodel.create({
      name: req.body.name,
      date: req.body.date,
      present: req.body.present,
      holiday: req.body.holiday,
    });
    const id = attend._id;
    res.status(200).json({ id, status: "success" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});
Router.post("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await attendmodel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ user: user, status: "success" });
  } catch (error) {
    res.status(error.statusCode).json({ error: error.message });
  }
});
Router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    await attendmodel.deleteOne({ _id: id });
    res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
});
export default Router;
