import mongoose from "mongoose";

const commentModel = new mongoose.Schema(
    {
        "id": {
            type: String,
            unique: true,
            index: true,
            default: function() {
                const timestamp = Date.now().toString();
                const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
                return `COMMENT_${timestamp}_${random}`;
            }
        },
        "storyId": {
            required: true,
            type: String,
            index: true
        },
        "userId": {
            required: true,
            type: String
        },
        "authorName": {
            required: true,
            type: String
        },
        "content": {
            required: true,
            type: String
        },
        "createdAt": {
            type: Date,
            default: Date.now
        }
    }
);

const Comment = mongoose.model('Comment', commentModel);
export default Comment;
