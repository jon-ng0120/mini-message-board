const express = require('express');
const Post = require('../models/post');
const router = express.Router();
const formatDate = require('../utilities/formatDate');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
  res.render('index', { messages: posts, formatDate });
});

router.post('/', async (req, res, next) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
