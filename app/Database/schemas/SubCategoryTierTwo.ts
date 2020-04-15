const SubCategoryTierTwoSchema = new Schema({
    Title:{
        type:String,
        required:true
    },

    TierTwoCategory:[]
});

module.exports= SubCategoryTierTwoSchema;
