const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// newsController.index

router.get('/:slug', newsController.show);

router.get('/', newsController.index); // khi truy cap vao /, sẽ chọc đến newsController.index

module.exports = router;
