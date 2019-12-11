const mongoose = require('mongoose');

const blogpost = new mongoose.Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  author: {
    type: String
  },
  date: {
    type: Date
  }
});

module.exports = BlogPost = mongoose.model('blogpost', blogpost);
