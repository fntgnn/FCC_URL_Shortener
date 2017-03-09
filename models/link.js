const mongoose=require('mongoose');

var LinkSchema=new mongoose.Schema({
    original_url: {type: String, default:''},
    token: {type: String, default:''},
    timestamp: {type:Date, default:Date.now}
});


module.exports = mongoose.model("LinkSchema", LinkSchema);
