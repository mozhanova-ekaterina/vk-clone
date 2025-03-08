import { generatePost, generatePosts } from "@/lib/mocks/posts";

let mockPosts = generatePosts(60);

export const fetchPosts = async (page: number, pageSize = 10) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Задержка 500ms

  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    data: mockPosts.slice(start, end),
    total: mockPosts.length,
  };
};

export const fetchPostById = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Задержка 500ms

  return mockPosts.find((post) => post.id === id);
};

export const fetchPost = async (postId: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Задержка 500ms

  return mockPosts.find((post) => post.id === postId);
};


// export const addComment = async (commentData: {
//   postId: string;
//   text: string
//   author: string
//   authorAvatar: string
// }) => {
//   await new Promise((resolve) => setTimeout(resolve, 300)); // Имитация загрузки

//   const newComment = {
//     ...generateComment(commentData.postId),
//     text: commentData.text,
//     author: commentData.author,
//     authorAvatar: commentData.authorAvatar
//   };

//   mockComments = [newComment, ...mockComments]; // Оптимистичное обновление

//   return newComment;
// }

export const createPost = async (postData: {
  caption: string;
  imageFile: File;
}) => {
  await new Promise((resolve) => setTimeout(resolve, 300)); // Имитация загрузки

  const newPost = {
    ...generatePost(),
    caption: postData.caption,
  };

  mockPosts = [newPost, ...mockPosts]; // Оптимистичное обновление

  return newPost;
};
