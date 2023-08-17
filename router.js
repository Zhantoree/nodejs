import {Router} from "express";
import Comment from "./Comment.js";
import CommentController from "./CommentController.js";

const router = new Router()
router.get('/posts')
router.get('/posts/:id')
router.post('/posts', CommentController.create)
router.put('/posts/:id')
router.delete('/posts/:id')

export default router