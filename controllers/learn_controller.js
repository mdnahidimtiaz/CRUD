const Learn = require("../models/learn_model.js");

// Retrieve all learn entries
const fetchAllLearns = async (req, res) => {
  try {
    const learnsList = await Learn.find();
    return res.status(200).json(learnsList);
  } catch (err) {
    return res.status(500).json({ error: "An error occurred while fetching learns: " + err.message });
  }
};

// Retrieve a single learn entry by ID
const fetchLearnById = async (req, res) => {
  const { id } = req.params;
  try {
    const learnItem = await Learn.findById(id);
    if (!learnItem) {
      return res.status(404).json({ error: "Learn entry not found." });
    }
    return res.status(200).json(learnItem);
  } catch (err) {
    return res.status(500).json({ error: "An error occurred while fetching the learn: " + err.message });
  }
};

// Create a new learn entry
const addLearn = async (req, res) => {
  try {
    const newLearn = new Learn(req.body);
    const savedLearn = await newLearn.save();
    return res.status(201).json(savedLearn);
  } catch (err) {
    return res.status(500).json({ error: "An error occurred while creating a learn entry: " + err.message });
  }
};

// Update an existing learn entry
const modifyLearn = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedLearn = await Learn.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedLearn) {
      return res.status(404).json({ error: "Learn entry not found for updating." });
    }
    return res.status(200).json(updatedLearn);
  } catch (err) {
    return res.status(500).json({ error: "An error occurred while updating the learn entry: " + err.message });
  }
};

// Delete a learn entry
const removeLearn = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedLearn = await Learn.findByIdAndDelete(id);
    if (!deletedLearn) {
      return res.status(404).json({ error: "Learn entry not found for deletion." });
    }
    return res.status(200).json({ message: "Learn entry successfully deleted." });
  } catch (err) {
    return res.status(500).json({ error: "An error occurred while deleting the learn entry: " + err.message });
  }
};

module.exports = {
  fetchAllLearns,
  fetchLearnById,
  addLearn,
  modifyLearn,
  removeLearn,
};
