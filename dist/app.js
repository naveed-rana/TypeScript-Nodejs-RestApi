"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieparser = require("cookie-parser");
const App = express();
exports.App = App;
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
App.get('/', (req, res) => {
    res.status(200).send('helloworld');
});
//# sourceMappingURL=app.js.map