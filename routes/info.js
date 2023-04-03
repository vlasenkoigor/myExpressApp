require('dotenv').config()
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET info page. */
router.get('/:id', async function(req, res, next) {


    //info-pages/
    console.log(req.params.id)

    let content;
    try {
        const response = await fetch(`${process.env.INFO_API_URL}/info-pages/${req.params.id}`)

        content = await response.json();
    } catch (e){
        content = null;
        console.log('request fail')
    }

    if (content && content.data && content.data.attributes){
        console.log(content)
        res.render('info', { title: 'Express', content: content.data.attributes.content });
    } else {
        res.send('no info page found');
    }
});

module.exports = router;
