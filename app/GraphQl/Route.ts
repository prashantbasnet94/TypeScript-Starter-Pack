import {Home} from "../controllers/Home";
import {TestImpl} from '../API/Test/TestImpl';
import {Test} from '../API/Test/Test';
import express from "express";

const graphqlHttp     = require('express-graphql'),
    {buildSchema}   = require('graphql');
let app: express.Application;
export  class Route {


    public routes(app:any):void{
       app.use('/graphql',graphqlHttp({
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

    }






}
