import Comment from "../model/comment.model";

export const getCommentsByStoryId = async (storyId: string) => {
    try {
        const comments = await Comment.find({ storyId }).sort({ createdAt: -1 });
        return comments;
    } catch (error) {
        console.error("Error retrieving comments:", error);
        throw error;
    }
};

export const saveComment = async (commentData: any) => {
    try {
        const newComment = new Comment({
            storyId: commentData.storyId,
            userId: commentData.userId,
            authorName: commentData.authorName,
            content: commentData.content,
            createdAt: new Date()
        });
        const savedComment = await newComment.save();
        return savedComment;
    } catch (error) {
        console.error("Error saving comment:", error);
        throw error;
    }
};

export const validateComment = (comment: any) => {
    if (!comment.storyId || comment.storyId.trim() === '') {
        return "Story ID is required";
    }
    if (!comment.userId || comment.userId.trim() === '') {
        return "User ID is required";
    }
    if (!comment.authorName || comment.authorName.trim() === '') {
        return "Author Name is required";
    }
    if (!comment.content || comment.content.trim() === '') {
        return "Content is required";
    }
    return null;
}
