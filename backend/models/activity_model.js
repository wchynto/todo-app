const mongoose = require("mongoose");

const Activity = new mongoose.Schema({
  activity: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Activity", Activity);
