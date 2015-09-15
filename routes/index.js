var express = require('express');
var multer = require('multer');
var upload = multer({
    dest: 'uploads/'
});
var router = express.Router();
var path = require('path');

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
    res.status(201).json(req.files);
});

router.get('/files', function (req, res) {
    res.status(200).json([
        {
            link: '/files/0d29c58558f9c26c07aeed7c852c6895'
        }
    ]);
});

router.get('/files/:id', function (req, res) {
    var filepathname = path.join(__dirname, '../uploads/' + req.params.id);
    res.sendFile(filepathname);
});

module.exports = router;
