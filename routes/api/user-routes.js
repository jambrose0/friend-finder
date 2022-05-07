const router = require("express").Router();

router.get("/", function (req, res) {
  console.log("Its working!");

  res.send("Response is working");
});

module.exports = router;
