const express = require("express");
const {
  getActivity,
  createActivity,
  deleteActivity,
} = require("../controllers/activity_controller");

const router = express.Router();

router.get("/", getActivity);
router.post("/create", createActivity);
router.post("/delete/:id", deleteActivity);

module.exports = router;
