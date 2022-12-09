import Express from "express";
import api from "./api";

const app = Express();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

app.use(Express.json());

app.use("/api/v1", api);

export default app;
