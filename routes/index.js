var express = require('express');
var router = express.Router();

const messages = [];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { messages: messages });
});

router.post('/new', function (req, res, next) {
  const title = req.body.title;
  const author = req.body.author;
  const message = req.body.message;
  const date = new Date();
  const messageObj = {
    title,
    author,
    message,
    date,
  };
  messages.push(messageObj);
  res.redirect('/');
});

module.exports = router;
