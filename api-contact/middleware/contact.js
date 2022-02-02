const express = require("express");
const router = express.Router();
const contacts = require("../model/Contact");

// url = /api
router.get("/", function (req, res) {
  res.json({ status: 200, payload: "api ready" });
});

router.get("/contacts", function (req, res) {
  contacts.getAll(req, res);
});

router.get("/contacts/:id", function (req, res) {
  contacts.getId(req, res);
});

router.post("/contacts", function (req, res) {
  contacts.add(req, res);
});

router.put("/contacts/:id", function (req, res) {
  contacts.update(req, res);
});
router.delete("/contacts/:id", function (req, res) {
  contacts.delete(req, res);
});

module.exports = router;
