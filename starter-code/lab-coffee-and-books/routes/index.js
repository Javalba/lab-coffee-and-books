var express = require('express');
var router = express.Router();
var Place = require('../models/place');


/* GET home page. */
router.route('/')
	.get((req, res, next) => {
	  Place.find({}).select('name description location -_id').exec((error, places) => {
	  	if (error) {
	  		next(error);
	  	} else {
	  		res.render('places/index', { places });
	  	}
	  })

	})
  .post((req, res, next) => {
  	var restaurant = new Restaurant();
  	restaurant.name = req.body.name;
  	restaurant.description = req.body.description;
  	restaurant.location.type = 'Point';
  	restaurant.location.coordinates = [req.body.longitude, req.body.latitude];
  	restaurant.save((error) => {
  		if (error) {
  			next(error);
  		} else {
  			res.redirect('/');
  		}
  	})
  	
  });

module.exports = router;
