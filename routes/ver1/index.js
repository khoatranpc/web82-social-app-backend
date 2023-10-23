import { Router } from "express";
import UserRouter from "./user.js";
import PostRouter from "./post.js";
import CommentRouter from "./comment.js";
const RouterV1 = Router();

RouterV1.use('/users', UserRouter);
RouterV1.use('/posts', PostRouter);
RouterV1.use('/comments', CommentRouter);
export default RouterV1;