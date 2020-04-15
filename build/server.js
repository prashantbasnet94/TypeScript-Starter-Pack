"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app/server.ts
var app_1 = __importDefault(require("./app"));
var port = process.env.PORT || 3000;
var server = app_1.default.listen(port);
var express = require('express')();
//# sourceMappingURL=server.js.map