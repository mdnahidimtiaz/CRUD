const express = require('express');
const {  fetchAllLearns,
    fetchLearnById,
    addLearn,
    modifyLearn,
    removeLearn } = require('../controllers/learn_controller.js');
const router = express.Router();

console.log({  fetchAllLearns,
    fetchLearnById,
    addLearn,
    modifyLearn,
    removeLearn});

router.get('/', fetchAllLearns);    
router.get('/:id',fetchLearnById );  
router.post('/', addLearn); 
router.put('/:id',modifyLearn ); 
router.delete('/:id', removeLearn);

module.exports = router;
