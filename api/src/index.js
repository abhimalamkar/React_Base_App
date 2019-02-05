import express from "express";
import path from "path";
import bodyParser from "body-parser";
import mongoose from 'mongoose' 
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(
  'mongodb://mongo:27017/api',
  { useNewUrlParser: true }
);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => console.log("Running on localhost:8080"));
