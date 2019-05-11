const router = require("express").Router();
var express = require('express');
const clientController = require("../../controllers/homepageController");





// Matches with "/api/books"
router.route("/")
  .get(clientController.findAll)
  .post(clientController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(clientController.findById)
  .put(clientController.update)
  .delete(clientController.remove);

module.exports = router;
