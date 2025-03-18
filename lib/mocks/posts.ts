import { faker } from "@faker-js/faker";
import { Post, PostSchema } from "../schemas";
import { generateComment } from "./comments";
import { generateUser } from "./users";

const ACCESS_KEY = "eOB-oaDecFk0kRbfe2VvCzjl6l1oSknvgRCXLU3um7w";

export const generatePost = (): Post => {
  const imageId = faker.number.int({ min: 1, max: 1000 });
  const imageUrl = "https://random.imagecdn.app/v1/image?width=500&height=150";
  const postId = faker.string.uuid();

  const post = {
    id: postId,
    imageUrl: faker.image.urlPicsumPhotos(),
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
