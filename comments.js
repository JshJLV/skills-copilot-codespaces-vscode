// Create web server using express
// Create a GET route for /comments that returns the comments array
// Create a POST route for /comments that adds a new comment to the array
// Create a DELETE route for /comments that will delete the comment with the specified ID
// Create a PUT route for /comments that will update the comment with the specified ID
// Create a GET route for /comments/:id that returns the comment with the specified ID
// Create a GET route for /post-comments/:postId that returns the comments for the specified post
// Create a GET route for /users/:userId/comments that returns the comments for the specified user

const express = require("express");
const router = express.Router();

const { comments } = require("../data/comments");

router.get("/", (req, res) => {
  res.json(comments);
});

router.get("/:id", (req, res) => {
  const commentId = parseInt(req.params.id);
  const foundComment = comments.find((comment) => comment._id === commentId);
  res.json(foundComment);
});

router.get("/post-comments/:postId", (req, res) => {
  const postId = parseInt(req.params.postId);
  const foundComments = comments.filter(
    (comment) => comment.postId === postId
  );
  res.json(foundComments);
});

router.get("/users/:userId/comments", (req, res) => {
  const userId = parseInt(req.params.userId);
  const foundComments = comments.filter((comment) => comment.userId === userId);
  res.json(foundComments);
});

router.post("/", (req, res) => {
  const newComment = {
    _id: comments.length + 1,
    body: req.body.body,
    postId: req.body.postId,
    userId: req.body.userId,
  };
  comments.push(newComment);
  res.json(comments);
});

router.put("/:id", (req, res) => {
  const commentId = parseInt(req.params.id);
  const foundComment = comments.find((comment) => comment._id === commentId);
  foundComment.body = req.body.body;
  foundComment.postId = req.body.postId;
  foundComment.userId = req.body.userId;
  res.json(comments);
});

router.delete("/:id", (req, res) => {
  const commentId = parseInt(req.params.id);
  const foundComment = comments.find((comment) => comment._id === commentId);
  const index = comments

