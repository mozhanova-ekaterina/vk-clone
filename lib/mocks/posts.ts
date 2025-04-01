import { faker } from "@faker-js/faker";
import { Post, PostSchema } from "../schemas";
import { generateComment } from "./comments";
import { generateUser } from "./users";

export const generatePost = (): Post => {
  const postId = faker.string.uuid();

  const post = {
    id: postId,
    imageUrl: faker.image.urlPicsumPhotos(),//!!!: FIX ME
    likes: faker.number.int({ min: 0, max: 1000 }),
    caption: faker.lorem.sentence(),
    author: generateUser(),
    timestamp: faker.date.recent({ days: 30 }),
    views: faker.number.int({ min: 0, max: 1000 }),
    comments: Array.from(
      { length: faker.number.int({ min: 0, max: 10 }) },
      () => generateComment(postId)
    ),
  };

  return PostSchema.parse(post);
};

export const generatePosts = (count: number) => {
  return Array.from({ length: count }, generatePost);
};
