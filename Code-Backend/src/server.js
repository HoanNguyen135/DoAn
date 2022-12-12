import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import initApiRoute from "./route/api";
//import connection from '../src/configs/connectDb'
require("dotenv").config();


//import log
//var morgan = require('morgan')

const app = express();


const port = process.env.PORT;
const cors = require("cors");

app.options("*", cors({ origin: 'http://localhost:8080', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "http://localhost:8080", optionsSuccessStatus: 200 }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


configViewEngine(app);
initWebRoute(app);
initApiRoute(app);



app.use((req, res) => {
  return res.render("404.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
