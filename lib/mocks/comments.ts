import { faker } from "@faker-js/faker";
import { Comment, CommentSchema } from "../schemas";

export const generateComment = (postId: string): Comment => {
  const comment = {
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
  };

  return CommentSchema.parse(comment);
};
