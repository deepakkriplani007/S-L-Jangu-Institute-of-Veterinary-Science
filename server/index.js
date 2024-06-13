import connectToMongo from "./db.js";
import express from "express";
import cors from "cors";
import auth from "./routes/auth.js";
import attend from "./routes/attend.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
connectToMongo();
const port = 5000;
let corsOptions = {
  credentials: true,
};

app.options("*", cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Available Routes
app.use("/api/auth", auth);
app.use("/", (req, res) => {
  res.send("hellofrom server");
});
app.use("/api/auth/attend", attend);
app.listen(port, () => {
  console.log(`Posts backend listening at http://localhost:${port}`);
});
