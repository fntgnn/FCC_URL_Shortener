const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const Link = require('../models/link');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:token', function(req, res, next) {
  const { token } = req.params;
  Link.findOne({ token }, function(err, link){
    if(err){
      console.log("Error ", err);
      return;
    }
    if(link){
      console.log(link);
      return res.redirect( link.original_url );
    }
    return res.json({
      error: "This url is not on the database."
    });
  });

});

router.get('/new/:link*', function(req, res, next){ //star because problems
  var original_url = req.params.link + req.params[0];
  if(validUrl.isUri(original_url)){

    Link.findOne({ original_url }, function(err, link){
      if(err){
        console.log("Error ", err);
        return;
      }
      const token = Math.random().toString(36).slice(-5);
      const newLink = new Link({
        original_url,
        token
      });
      newLink.save(function(err){
        if(err){
          console.log(err);
          return;
        }
        res.json({
          original_url,
          short_url:"https://fntgnn-fcc-url-shortener.herokuapp.com"+token
        });
      });
    });

  }
  else { return res.json({ error: 'The url is not valid' }); }
});

module.exports = router;
