const Learn = require("../models/learn_model.js");

const fetchAllLearns = async (req, res) => {
  try {
    const learnsList = await Learn.find();
    return res.status(200).json(learnsList);
  } catch (err) {
    return res.status(500).json({ error: "error occurred : " + err.message });
  }
};

const fetchLearnById = async (req, res) => {
  const { id } = req.params;
  try {
    const learnItem = await Learn.findById(id);
    if (!learnItem) {
      return res.status(404).json({ error: "Learn entry not found." });
    }
    return res.status(200).json(learnItem);
  } catch (err) {
    return res.status(500).json({ error: "error occurred: " + err.message });
  }
};


const addLearn = async (req, res) => {
  try {
    const newLearn = new Learn(req.body);
    const savedLearn = await newLearn.save();
    return res.status(201).json(savedLearn);
  } catch (err) {
    return res.status(500).json({ error: " error occurred : " + err.message });
  }
};

const updatedLearn = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedLearn = await Learn.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedLearn) {
      return res.status(404).json({ error: "for updating." });
    }
    return res.status(200).json(updatedLearn);
  } catch (err) {
    return res.status(500).json({ error: "Error occurred : " + err.message });
  }
};


const removedLearn = async (req, res) => {
  const { id } = req.params;
  try {
    const removedLearn = await Learn.findByIdAndDelete(id);
    if (!removedLearn) {
      return res.status(404).json({ error: "for deletion." });
    }
    return res.status(200).json({ message: "Learn entry successfully deleted." });
  } catch (err) {
    return res.status(500).json({ error: "Error occurred: " + err.message });
  }
};

module.exports = {
  fetchAllLearns,
  fetchLearnById,
  addLearn,
  updatedLearn,
  removedLearn,
};
