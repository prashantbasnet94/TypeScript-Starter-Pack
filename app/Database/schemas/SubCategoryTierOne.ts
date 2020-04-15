const SubCategoryTierOneSchema = new Schema({
    Title:{
        type:String,
        required:true
    },

    TierOneCategory:[]
});

module.exports=SubCategoryTierOneSchema;

