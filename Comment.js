import mongoose from "mongoose";

const Comment = new mongoose.Schema({
    userId: {type: "string", required: true},
    title: {type: "string", required: true},
    text: {type: "string", required: true}
})

export default mongoose.model('Comment', Comment)