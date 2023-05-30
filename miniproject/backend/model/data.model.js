const mongoose = require('mongoose');

const useScama = mongoose.Schema({
    img : String,
    ocation : String,
    location : String,
    clickBy : String,
});

const DataModel = mongoose.model('data' , useScama);

module.exports = {DataModel}