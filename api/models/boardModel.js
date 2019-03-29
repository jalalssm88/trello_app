const mongoose = require('mongoose');

const BoardSchema = mongoose.Schema({
    name:String,
    team:String,
    category:String,
    board_color:String
    
})

module.exports = mongoose.model("boards", BoardSchema);