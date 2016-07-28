var express = require('express');
var router = new express.Router();

var db = require('../../db');
var Order = db.Order;

router.get('/:id', function(req, res, next){
  Order.findById(req.params.id)
  .then(order=> res.send(order))
  .catch(next);
})



module.exports = router;
