// lib/mocks/posts.ts
import { Comment } from "@/types/comments";
import { faker } from "@faker-js/faker";
import { z } from "zod";

// Схема для валидации (опционально)
const PostSchema = z.object({
  id: z.string().uuid(),
  imageUrl: z.string().url(),
  likes: z.number().nonnegative().default(0),
  caption: z.string().max(200),
  author: z.object({
    id: z.number(),
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    phone: z.string(),
    avatar: z.string().url(),
  }),
  timestamp: z.date(),
  views: z.number().nonnegative().default(0),
});

const CommentSchema = z.object({
  id: z.string().uuid(),
  postId: z.string().uuid(),
  text: z.string().max(200),
  author: z.string(),
  timestamp: z.date(),
  likes: z.number().nonnegative().default(0),
  authorAvatar: z.string().url(),
});

export type Post = z.infer<typeof PostSchema>;

export const generatePost = (): Post => {
  const imageId = faker.number.int({ min: 1, max: 1000 });
  const imageUrl = `https://loremflickr.com/800/600/nature?lock=${imageId}`;
  const post = {
    id: faker.string.uuid(),
    imageUrl: imageUrl,
    likes: faker.number.int({ min: 0, max: 1000 }),
    caption: faker.lorem.sentence(),
    author: {
      id: faker.number.int(),
      name: faker.person.fullName(),
      username: faker.internet.username(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      avatar: faker.image.avatar(),
    },
    timestamp: faker.date.recent({ days: 30 }),
    views: faker.number.int({ min: 0, max: 1000 }),
  };

  return PostSchema.parse(post); // Валидация при генерации
};

export const generateComment = (postId: string): Comment => {
  const comment = {
    id: faker.string.uuid(),
    postId: postId,
    text: faker.lorem.sentence(),
    author: faker.person.fullName(),
    timestamp: faker.date.recent({ days: 30 }),
    likes: faker.number.int({ min: 0, max: 1000 }),
    authorAvatar: faker.image.avatar(),
  };

  return CommentSchema.parse(comment);
};

export const generatePosts = (count: number) => {
  return Array.from({ length: count }, generatePost);
};

export const generateComments = (postId: string) => {
  return Array.from({ length: Math.ceil(Math.random() * 50) }, () =>
    generateComment(postId)
  );
};
