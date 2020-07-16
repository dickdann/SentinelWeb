const Location = require('../models/Location')
/**
 * GET /
 * Home page.
 */
exports.getAddLocation = (req, res) => {
    var locationId = req.params.id;
    
    Location.findById(locationId, function(err, location){
        res.render('location/add', {
            title: 'Add location',
            location:location  
          });
        
    })
    
  
};
