const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
    team:String,
})

module.exports = mongoose.model("teams", TeamSchema);