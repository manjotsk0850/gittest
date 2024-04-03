const mongoose=require("mongoose");

const Books = mongoose.Schema({
    title:{type:String}
});

module.exports=mongoose.model('Books', Books);