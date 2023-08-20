const express = require("express");
const router = express.Router();
const { APP_NAME } = process.env;

/* NOTE: GET users listing. */
router.get("/", function (req, res, next) {
  res.send("COURSES");
});

module.exports = router;
