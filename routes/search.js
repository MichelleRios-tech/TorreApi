const express = require('express');
const getSkills = require('./controllers/getSkills');
const router = express.Router();
const searchPeople = require('./controllers/searchPeople');

/* GET skills listing. */
router.post('/', searchPeople);

module.exports = router;
