import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

const App = express();

App.get('/',(req,res)=>{
 res.send("Hello world");
});

export {App};