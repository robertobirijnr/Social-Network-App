const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  req.send("Auth Route");
});

module.exports = router;
