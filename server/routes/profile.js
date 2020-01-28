const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  req.send("Profile Route");
});

module.exports = router;
