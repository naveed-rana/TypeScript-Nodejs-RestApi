import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as session from 'express-session';
import * as cookieparser from 'cookie-parser';

const App = express();
App.use(bodyParser.urlencoded({
    extended: true
  }));
App.use(bodyParser.json());
App.use(session({
  secret: "@#^&$!#_)(@!#)**(@^%*&^*#${}|{@#$@#$(#@",
  resave: true,
  saveUninitialized: true
}));
App.use(cookieparser());


App.get('/',(req,res)=>{
 res.status(200).send('helloworld');
});

export {App};