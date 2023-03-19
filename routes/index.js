var express = require('express');
var router = express.Router();

const messages = [
  {
    title: 'Hi there!',
    text: 'lorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem sfaslorem',
    user: 'Amando',
    added: new Date(),
  },
  {
    title: 'Hello World!',
    text: 'lorem sfasdf',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { messages: messages });
});

module.exports = router;
