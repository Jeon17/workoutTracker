let express = require('express');
let router = express.Router();


router.get('/', (req, res) => {
    res.render('Hello world')
})

module.exports = router