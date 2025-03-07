import { User } from "./user";

export type Post = {
  id: string;
  caption: string;
  imageUrl: string;
  author: User;
  likes: number;
  views: number;
  timestamp: Date;
};
