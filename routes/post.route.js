import { Router } from 'express';
import { addPost, getAllPosts, addPostComment, getAllComments, likePost, dislikePost, deletePost } from '../controllers/post.controller';
import auth from '../config/auth.config';

const router = Router();

router.post('/add-post', auth, addPost);
/**
 * @swagger
 * /posts/add-post:
 *   post:
 *      description: Used to add post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - description
 *                 - imagePath
 *                 - addedByUserId
 *              properties:
 *                  description:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: This is a sample post
 *                  imagePath:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: abc.png
 *                  addedByUserId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/get-all-posts", auth, getAllPosts);
/**
 * @swagger
 * /posts/get-all-posts:
 *   get:
 *      description: Used to get all posts
 *      tags:
 *          - posts
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post("/add-post-comment", auth, addPostComment);
/**
 * @swagger
 * /add-post-comment:
 *   post:
 *      description: Used to comments on post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Comment
 *            description: Add comments
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *                 - comment
 *                 - addedByUserId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1
 *                  comment:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 1000
 *                      example: This is a sample comment
 *                  addedByUserId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/get-all-comments", auth, getAllComments);
/**
 * @swagger
 * /posts/get-all-comments:
 *   get:
 *      description: Used to get all posts
 *      tags:
 *          - posts
 *      parameters:
 *          - in: query
 *            name: postId
 *            type: integer
 *            description: Post Id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put("/like-post", auth, likePost);
/**
 * @swagger
 * /posts/like-post:
 *   put:
 *      description: Used to like posts
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Like post
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put("/dislike-post", auth, dislikePost);
/**
 * @swagger
 * /posts/dislike-post:
 *   put:
 *      description: Used to like posts
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Like post
 *            schema:
 *              type: object
 *              required:
 *                 - postId
 *              properties:
 *                  postId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete("/delete-post", auth, deletePost);
/**
 * @swagger
 * /posts/delete-post:
 *   delete:
 *      description: Used to delete post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: query
 *            name: postId
 *            type: integer
 *            description: Post Id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

export default router;
