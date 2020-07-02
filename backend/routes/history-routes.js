const express = require('express');

const historyController = require('../controllers/history-controllers');

const router = express.Router();

router.get('/', historyController.getHistorys);

module.exports = router;
