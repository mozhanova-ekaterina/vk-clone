export type Comment = {
  id: string;
  postId: string;
  text: string;
  author: string;
  timestamp: Date;
  likes: number;
  authorAvatar: string;
};
