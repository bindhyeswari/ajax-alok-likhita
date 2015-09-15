var express = require('express');
var multer = require('multer');
var upload = multer({
    dest: 'uploads/'
});
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/contacts', function (req, res) {
    console.log(req.body);
    res.status(201).json( {
      message: 'IMPL_101'
    });
});

router.post('/files/upload', upload.array('likhita', 5), function (req, res) {
    // store the files in a directory
    console.log(req.files);
});

module.exports = router;
