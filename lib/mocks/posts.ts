import { faker } from "@faker-js/faker";
import { Comment, Post, PostSchema, User } from "../schemas";

const generateComment = (postId: string): Comment => ({
  id: faker.string.uuid(),
  postId: postId,
  author: {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
  },
  text: faker.lorem.paragraph(),
  likes: faker.number.int({ min: 0, max: 100 }),
  timestamp: faker.date.recent({ days: 7 }),
});

const generateUser = (): User => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  username: faker.internet.username(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  avatar: faker.image.avatar(),
});

export const generatePost = (): Post => {
  const imageId = faker.number.int({ min: 1, max: 1000 });
  const imageUrl = `https://loremflickr.com/800/600/nature?lock=${imageId}`;
  const postId = faker.string.uuid();

  const post = {
    id: postId,
    imageUrl: imageUrl,
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

  return PostSchema.parse(post); // Валидация при генерации
};

export const generatePosts = (count: number) => {
  return Array.from({ length: count }, generatePost);
};
