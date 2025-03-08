import { createContext } from "react";
import { PostStore } from "./post.store";
import { UserStore } from "./user.store";

export class RootStore {
  postStore: PostStore;
  userStore: UserStore;
  constructor() {
    this.postStore = new PostStore();
    this.userStore = new UserStore();
  }
}

export const RootStoreContext = createContext<RootStore | null>(null);