import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/registerRoutes.js";
import client from "./mongoDbConnect.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 4000;
//express app
const app = express();
app.use(cors());
app.use(express.json()); //to parse JSON payload
app.use(express.static('public'));
app.use("/api/auth", authRoutes);

//Listen for request
app.listen(PORT, () => {
    client();
    console.log(`I am listening at port ${PORT}`);
});

