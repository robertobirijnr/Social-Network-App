const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  req.send("User Route");
});

module.exports = router;
