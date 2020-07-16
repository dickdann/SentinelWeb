const mongoose = require('mongoose');
var mime = require('mime-types');
    

const feedbackSchema = new mongoose.Schema({
    feedback:String,
    stars:Number
  })

  
  const fileStoreSchema = new mongoose.Schema({  
        destination:String,
        encoding: String,
        fieldname: String,
        filename: String,
        mimetype: String,
        originalname: String,
        path: String,
        size: Number,
        title:String,
        detail:String,
        hidden:{type:Boolean, default:false} });
  
        fileStoreSchema.methods.getExtension = function getExtension(){
          var fileExtension = mime.extension(this.mimetype);
          return fileExtension;
        };

        fileStoreSchema.methods.setExtension = function getExtension(){
          var fileExtension = mime.extension(this.mimetype);
          return fileExtension;
        };
        
        fileStoreSchema.methods.getUrl = function getUrl(){
            return process.env.FULLHOST + '/uploads/' + this.filename;
        };

// exported common types
module.exports = {
  fileStore : fileStoreSchema,
  feedback : feedbackSchema
} 


