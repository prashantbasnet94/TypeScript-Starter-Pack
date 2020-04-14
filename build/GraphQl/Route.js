"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphqlHttp = require('express-graphql'), buildSchema = require('graphql').buildSchema;
var app;
var Route = /** @class */ (function () {
    function Route() {
    }
    Route.prototype.routes = function (app) {
        app.use('/graphql', graphqlHttp({
            schema: buildSchema("\n                type RootQuery{\n                    events:[String!]\n                }\n\n                type RootMutation{\n                   createEvent(name:String):String\n                 }\n\n                schema  {\n                           query:RootQuery\n                           mutation: RootMutation\n                }\n                "),
            rootValue: {
                events: function () {
                    return ['Hey', 'It', "Worked"];
                },
                createEvent: function (args) {
                    return args.name;
                }
            },
            graphiql: true
        }));
    };
    return Route;
}());
exports.Route = Route;
//# sourceMappingURL=Route.js.map