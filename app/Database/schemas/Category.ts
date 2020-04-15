const mongoose =require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    Title:{
        type:String,
        required:true
    },
    SubCategory:[]
});

module.exports= CategorySchema;
