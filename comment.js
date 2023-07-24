// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');

// Create a comment
// POST localhost:5000/api/comment
router.post('/', auth, commentController.createComment);

// Get all comments
// GET localhost:5000/api/comment
router.get('/', auth, commentController.getAllComments);

// Delete a comment
// DELETE localhost:5000/api/comment/:id
router.delete('/:id', auth, commentController.deleteComment);

// Update a comment
// PUT localhost:5000/api/comment/:id
router.put('/:id', auth, commentController.updateComment);

// Get a comment
// GET localhost:5000/api/comment/:id
router.get('/:id', auth, commentController.getComment);

module.exports = router;