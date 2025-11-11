const express = require('express')
const cors = require("cors")
const dotenv= require("dotenv")
const { connectDB } = require("./config/database.js")
const indexRoute  = require('./admin/routers/index.route.js')

const app = express()
const port = 4444;
dotenv.config()
connectDB();
const cookieParser = require("cookie-parser");
app.use(cookieParser("SFGWHSDSGSDSD"));

app.use(express.json());

app.use(cors({
    origin:"http://localhost:3000",
    methods:['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders:['Content-Type', 'Authorization'],
    credentials: true
}))


app.use("/admin",indexRoute )
app.listen(port,()=>{
    console.log(`Run:  ${port}`);
})

