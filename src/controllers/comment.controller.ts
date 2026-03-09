import { Request, Response } from "express";
import * as commentService from "../services/comment.service";

const getParamValue = (value: string | string[] | undefined): string =>
    Array.isArray(value) ? value[0] ?? '' : value ?? '';

export const getCommentsForStory = async (req: Request, res: Response) => {
    const storyId = getParamValue(req.params.storyId);

    if (!storyId) {
        return res.status(400).json({ error: 'Story ID is required' });
    }

    try {
        const comments = await commentService.getCommentsByStoryId(storyId);
        return res.status(200).json(comments);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Something went wrong fetching comments' });
    }
};

export const saveComment = async (req: Request, res: Response) => {
    try {
        const newComment = req.body;

        // Add user details from the authenticated token if available
        const user = (req as any).user;
        if (user) {
            newComment.userId = user.id;
            newComment.authorName = user.name;
        }

        const validationError = commentService.validateComment(newComment);
        if (validationError) {
            return res.status(400).json({ error: validationError });
        }

        const savedComment = await commentService.saveComment(newComment);
        return res.status(201).json(savedComment);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Something went wrong saving comment' });
    }
};
