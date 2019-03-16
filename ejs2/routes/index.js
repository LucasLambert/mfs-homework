var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/check', function(req, res, next) {
   var a="lucas"
  if(req.body.username==a)
  {res.send("重复");}
  else
  {res.send("成功");}

});



module.exports = router;
