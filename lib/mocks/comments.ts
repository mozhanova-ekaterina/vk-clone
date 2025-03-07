import { User } from "@/types/user";

export type Comment = {
  id: string;
  text: string;
  author: User;
  timestamp: Date;
};
