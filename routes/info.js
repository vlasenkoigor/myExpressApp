var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET home page. */
router.get('/', async function(req, res, next) {

    const response = await fetch('http://localhost:1337/api/info-pages/8')

    const content = await response.json();

    console.log(content);

    res.render('info', { title: 'Express', content: content.data.attributes.content });


});

module.exports = router;
