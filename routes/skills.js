var express = require('express');
const getSkills = require('./controllers/getSkills');
var router = express.Router();

/* GET skills listing. */
router.get('/:username', getSkills);

module.exports = router;
