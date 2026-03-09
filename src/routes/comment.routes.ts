import { Router } from "express";
import { getCommentsForStory, saveComment } from "../controllers/comment.controller";
import { authenticateToken } from "../middleware/auth.middleware";

const commentRouter: Router = Router();

commentRouter.get("/:storyId", getCommentsForStory);
commentRouter.post("/save", authenticateToken, saveComment);

export default commentRouter;
