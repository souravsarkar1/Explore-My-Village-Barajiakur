const express = require('express');
const { connection } = require('./db');
const { dataRouter } = require('./routes/data.routes');
var cors = require('cors');
const { userRouter } = require('./routes/user.routes');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors());
app.use("/data",dataRouter);
app.use('/users' , userRouter);
app.listen(process.env.port, async()=>{
    try {
        await connection;
        console.log(`port is runnig at ${process.env.port}`);
        console.log("connected to db");
    } catch (error) {
        console.log(error.message);
        console.log("Something went to wrong");
    }
})