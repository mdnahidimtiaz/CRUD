const express = require('express');
const {  fetchAllLearns,
    fetchLearnById,
    addLearn,
    updatedLearn,
    removedLearn } = require('../controllers/learn_controller.js');
const router = express.Router();

console.log({  fetchAllLearns,
    fetchLearnById,
    addLearn,
    updatedLearn,
    removeLearn});

router.get('/', fetchAllLearns);    
router.get('/:id',fetchLearnById );  
router.post('/', addLearn); 
router.put('/:id',updatedLearn ); 
router.delete('/:id', removedLearn);

module.exports = router;
