// app/app.ts
import express from "express";
import bodyParser from "body-parser";
import {AppHomeRoute} from "./routes/AppHomeRoute";


let framework = require('express')(),



// for auth
const   mongoose = require("mongoose"),
        methodOverride = require("method-override"),
        expressSanitizer= require('express-sanitizer'),
        graphqlHttp     = require('express-graphql'),
        {buildSchema}   = require('graphql');



    class App {


        public app: express.Application;
        public route: AppHomeRoute = new AppHomeRoute();
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
            this.app.use('/graphql',graphqlHttp({
                schema:buildSchema(`
                type RootQuery{
                    events:[String!]
                }
                
                type RootMutation{
                   createEvent(name:String):String               
                 }
          
                schema  {
                           query:RootQuery
                           mutation: RootMutation
                }
                `),
                rootValue:{
                    events:()=>{
                        return ['Hey','It',"Worked"]
                    },
                    createEvent:(args:any)=>{
                        return args.name;
                    }
                },
                graphiql:true
            }));
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
