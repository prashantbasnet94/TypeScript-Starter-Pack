"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var CategorySchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    SubCategory: []
});
module.exports = CategorySchema;
//# sourceMappingURL=Category.js.map