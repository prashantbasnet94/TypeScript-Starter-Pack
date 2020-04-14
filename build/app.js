"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app/app.ts
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var Route_1 = require("./GraphQl/Route");
// for auth
var mongoose = require("mongoose"), methodOverride = require("method-override"), expressSanitizer = require('express-sanitizer');
var App = /** @class */ (function () {
    function App() {
        this.route = new Route_1.Route();
        mongoose.connect(" mongodb+srv://prashantbasnet:prashantbasnet94@portfolio-aejnr.mongodb.net/CovidMap?retryWrites=true");
        this.app = express_1.default();
        this.app.use(methodOverride("_method"));
        // support application/json type post data
        this.app.use(body_parser_1.default.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.set("view engine", "ejs");
        this.app.use(methodOverride("_method"));
        this.app.use(express_1.default.static("public"));
        this.app.use(expressSanitizer());
        this.config();
        // this.app.use(this.auth.isLoggedIn
        //graphql
        this.route.routes(this.app);
    }
    App.prototype.config = function () {
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            next();
        });
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map