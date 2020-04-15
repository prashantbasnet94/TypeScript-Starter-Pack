import {Home} from "../controllers/Home";
import {TestImpl} from '../API/Test/TestImpl';
import {Test} from '../API/Test/Test';
import express from "express";

const graphqlHttp     = require('express-graphql'),
    {buildSchema}   = require('graphql');
let app: express.Application;
let events: string[] = [];
export  class Route {

    public routes(app:any):void{

//title:String!,description:String!,price:Float!,date:String!
//
//         mutation {
//             createEvent(eventInput: {title: "Orashant", description: "the fuk", price: 12, date: "the 2020"}) {
//                 title
//                 description
//             }
//         }

       app.use('/graphql',graphqlHttp({
            schema:buildSchema(`
             
                type Event {
                    _id:String!
                    title:String!
                    description:String!
                    price: Float!
                    date:String!
                    }
                input EventInput{
                    title:String!
                    description:String
                    price:Float!
                    date:String!
                
                }
                type RootQuery{
                    events:[Event!]!
                }
                

                type RootMutation{
                   createEvent(eventInput:EventInput):Event!
                 }

                schema  {
                           query:RootQuery
                           mutation: RootMutation
                }
                `),
            rootValue:{
                events:()=>{
                    return events
                },
                createEvent:(param:any)=>{
                    let args=param.eventInput;
                    let event={
                        _id:Math.random().toString(),
                        title:args.title,
                        description:args.description,
                        price:+args.price,
                        date:args.date
                    };
                    console.log(event);
                    console.log('---->'+events.length);
                    events.push(event);

                    return event;
                }
            },
            graphiql:true
        }));

    }






}
