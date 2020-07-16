const common = require('./Common');
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const locationSchema = new mongoose.Schema({
    locationId:{type:ObjectId, required:true},
    ingestionDate:Date,    
    description:String,
    productName:String,
    tileInfo:{},
    thumbnail:common.filestore,
    iamge:common.filestore
}, { timestamps: true });

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
