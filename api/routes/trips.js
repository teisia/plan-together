var express = require('express');
var router = express.Router();
var knex = require("../db/knex");

function trips() {
  return kenx('trip');
}

router.get("/", function(req,res){
   trips().select().then(function(payload){
     res.json(payload);
   });
});

router.get("/:id", function(req,res){
   trips().where({id: req.params.id}).then(function(payload){
     res.json(payload);
   });
});

router.post("/", function(req,res) {
  trips().insert(req.body).then(function(result) {
    res.json({success: true});
  })
})

module.exports = router;
