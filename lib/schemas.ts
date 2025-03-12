import { z } from "zod";

export const CommentSchema = z.object({
  id: z.string().uuid(),
  postId: z.string().uuid(),
  text: z.string().min(1),
  likes: z.number().nonnegative(),
  timestamp: z.date(),
  author: z.object({
    id: z.string().uuid(),
    name: z.string(),
    avatar: z.string().url(),
  }),
});

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  phone: z.string(),
  avatar: z.string().url(),
});

export const PostSchema = z.object({
  id: z.string().uuid(),
  imageUrl: z.string().url(),
  likes: z.number().nonnegative().default(0),
  liked: z.boolean().default(false),
  caption: z.string().max(200),
  author: z.object({
    id: z.string().uuid(),
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    phone: z.string(),
    avatar: z.string().url(),
  }),
  timestamp: z.date(),
  views: z.number().nonnegative().default(0),
  comments: z.array(
    z.object({
      id: z.string().uuid(),
      postId: z.string().uuid(),
      text: z.string().min(1),
      likes: z.number().nonnegative(),
      timestamp: z.date(),
      author: z.object({
        id: z.string().uuid(),
        name: z.string(),
        avatar: z.string().url(),
      }),
    })
  ),
});

// Генерация типов
export type Post = z.infer<typeof PostSchema>;
export type Comment = z.infer<typeof CommentSchema>;
export type User = z.infer<typeof UserSchema>;
