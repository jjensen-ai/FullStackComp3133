var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//Exercise-1
// router.post('/', function(req, res, next) {
//   console.log(`First Name: ${req.body.firstname}`);
//   console.log(`Last Name: ${req.body.lastname}`);
//   res.send('POST receieved');
// })

// router.use(bodyParser.urlencoded({extended: true}));

//Exercise-2
const urlParser = bodyParser.urlencoded({extended: true})

router.post('/', urlParser, (req, res) =>{
  console.log(`First Name: ${req.body.firstname}`)
  console.log(`Last Name: ${req.body.lastname}`)
  res.send('Post Recieved!')
})
module.exports = router;
