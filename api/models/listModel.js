const mongoose = require('mongoose');
const ListSchema = mongoose.Schema({
    board_list:String,
})
module.exports = mongoose.model("lists", ListSchema);