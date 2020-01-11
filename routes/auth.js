const express = require("express");
const router = express.Router();

//@router       GET  /api/auth
//@desc         Get the logged in user
//@access       Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

//@router       post /api/auth
//@desc         Auth user & get token
//@access       Public
router.post("/", (req, res) => {
  res.send(" Log in user");
});

module.exports = router;
