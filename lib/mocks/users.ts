import { faker } from "@faker-js/faker";
import { User, UserSchema } from "../schemas";

export const generateUser = (): User => {
  const user = {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    avatar: faker.image.avatar(),
  };

  return UserSchema.parse(user);
};
