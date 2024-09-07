import express from "express";

//express app
const app = express();

//Listen for request
app.listen(4000, () => {
    console.log('I am listening at port 4000');
});

