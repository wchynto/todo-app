const Activity = require("../models/activity_model");

const getActivity = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json({ activities: activities });
  } catch (error) {
    res.json(error);
  }
};

const createActivity = async (req, res) => {
  try {
    const activity = new Activity(req.body);
    const savedActivity = await activity.save();
    res.json({ message: "Success add", activity: savedActivity });
  } catch (error) {
    res.json(error);
  }
};

const deleteActivity = async (req, res) => {
  try {
    const activity = await Activity.findByIdAndDelete(req.params.id);
    res.json({ message: "Success delete" });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getActivity,
  createActivity,
  deleteActivity,
};
