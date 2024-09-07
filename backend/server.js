import express from "express";
import dotenv from "dotenv"


//express app
const app = express();

//Listen for request
app.listen(4000, () => {
    console.log('I am listening at port 4000');
});

