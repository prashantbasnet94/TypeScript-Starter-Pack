"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphqlHttp = require('express-graphql'), buildSchema = require('graphql').buildSchema;
var app;
var events = [];
var Route = /** @class */ (function () {
    function Route() {
    }
    Route.prototype.routes = function (app) {
        //title:String!,description:String!,price:Float!,date:String!
        //
        //         mutation {
        //             createEvent(eventInput: {title: "Orashant", description: "the fuk", price: 12, date: "the 2020"}) {
        //                 title
        //                 description
        //             }
        //         }
        app.use('/graphql', graphqlHttp({
            schema: buildSchema("\n             \n                type Event {\n                    _id:String!\n                    title:String!\n                    description:String!\n                    price: Float!\n                    date:String!\n                    }\n                input EventInput{\n                    title:String!\n                    description:String\n                    price:Float!\n                    date:String!\n                \n                }\n                type RootQuery{\n                    events:[Event!]!\n                }\n                \n\n                type RootMutation{\n                   createEvent(eventInput:EventInput):Event!\n                 }\n\n                schema  {\n                           query:RootQuery\n                           mutation: RootMutation\n                }\n                "),
            rootValue: {
                events: function () {
                    return events;
                },
                createEvent: function (param) {
                    var args = param.eventInput;
                    var event = {
                        _id: Math.random().toString(),
                        title: args.title,
                        description: args.description,
                        price: +args.price,
                        date: args.date
                    };
                    console.log(event);
                    console.log('---->' + events.length);
                    events.push(event);
                    return event;
                }
            },
            graphiql: true
        }));
    };
    return Route;
}());
exports.Route = Route;
//# sourceMappingURL=Route.js.map