const common = require('./Common');
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name:String,
    description:String,
    productName:String,
    wkt:String,
    thumbnail:common.fileStore,
    iamge:common.fileStore
}, { timestamps: true });

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
