const Location = require('../models/Location')
/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  Location.find({}, function(err, locations){
    res.render('home', {
      title: 'Home',
      'locations':locations
    });
  })
  
};
