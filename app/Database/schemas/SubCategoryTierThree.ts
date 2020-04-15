const SubCategoryTierThreeSchema = new Schema({
    Title:{
        type:String,
        required:true
    },

    TierThreeCategory:[]
});

module.exports= SubCategoryTierThreeSchema;
