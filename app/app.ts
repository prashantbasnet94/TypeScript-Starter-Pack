// app/app.ts
import express from "express";
import bodyParser from "body-parser";
import {Route} from "./GraphQl/Route";


let framework = require('express')(),



// for auth
const   mongoose = require("mongoose"),
        methodOverride = require("method-override"),
        expressSanitizer= require('express-sanitizer');




    class App {


        public app: express.Application;
        public route: Route = new Route();
        constructor() {
            mongoose.connect(" mongodb+srv://prashantbasnet:prashantbasnet94@portfolio-aejnr.mongodb.net/CovidMap?retryWrites=true");
            this.app = express();
            this.app.use(methodOverride("_method"));


            // support application/json type post data
            this.app.use(bodyParser.json());
            //support application/x-www-form-urlencoded post data
            this.app.use(bodyParser.urlencoded({extended: false}));
            this.app.set("view engine", "ejs");
            this.app.use(methodOverride("_method"));
            this.app.use(express.static("public"));
            this.app.use(expressSanitizer());
            this.config();
            // this.app.use(this.auth.isLoggedIn


            //graphql

            this.route.routes(this.app);


        }

        private config(): void {


            this.app.use(function (req, res, next) {
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
                next();
            });


        }


    }
export default new App().app;
