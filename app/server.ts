// app/server.ts
import app from "./app";
 const port = process.env.PORT || 3000;
let server = app.listen(port);

let express = require('express')();

