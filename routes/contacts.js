const express = require("express");
const router = express.Router();

//@router      GET   api/contacts
//@desc        Get the all user contacts
//@access      Private
router.get("/", (req, res) => {
  res.send("Get  the  all the contacts");
});

//@router       POST  api/contacts
//@desc         add new contact
//@access        private
router.post("/", (req, res) => {
  res.send("Add contact");
});

//@router       put api/contacts/:id
//@desc         update the user
//@access       private
router.put("/:id", (req, res) => {
  res.send("update  the contact");
});

//@router       delete  api/contacts/:id
//@desc         delete the user
//@access       private
router.delete("/:id", (req, res) => {
  res.send("delete the contact");
});

module.exports = router;
