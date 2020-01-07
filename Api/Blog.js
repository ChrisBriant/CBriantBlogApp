const express = require('express');
const mongoose = require('mongoose');
const BlogPost = require('../DB/BlogPost');
const route = express.Router();

/*
route.post('/', async (req, res) => {
  const { firstName, lastName } = req.body;
  let user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});*/

route.post('/posts', async (req, res) => {
  const { title, body, author } = req.body;
  let blogpost = {};
  blogpost.title = title;
  blogpost.body = body;
  blogpost.author = author;
  blogpost.date = new Date();
  let blogModel = new BlogPost(blogpost);
  await blogModel.save();
  res.json(blogModel);
});

/*
route.get('/getblogbyid', async (req, res) => {
  const { id } = req.id;

  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
  }*/

route.get("/", async (request, response) => {
    try {
        var result = await BlogPost.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

route.get("/viewblogs", async (request, response) => {
    try {
        var result = await BlogPost.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

route.get("/viewblog", async (request, response) => {
    try {
        for (const key in request.query) {
            console.log(key, request.query[key]);
        }
        var result = await BlogPost.findById(request.query['id']).exec();
        response.send(result);
        console.log("HERE");
    } catch (error) {
        response.status(500).send(error);
    }
});


module.exports = route;
