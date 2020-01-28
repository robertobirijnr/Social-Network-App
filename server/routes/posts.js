const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  req.send("Post Route");
});

module.exports = router;
