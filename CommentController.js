import Comment from "./Comment.js";

class CommentController {
    async create(req, res) {
        try {
            const {userId, title, text} = req.body
            const comment = await Comment.create({userId, title, text})
            res.json(comment)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new CommentController()