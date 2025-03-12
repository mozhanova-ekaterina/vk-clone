import { generatePosts } from "@/lib/mocks/posts";
import { Post } from "@/lib/schemas";

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

export const updatePost = async (post: Post) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Задержка 500ms

  const index = mockPosts.findIndex((p) => p.id === post.id);
  if (index !== -1) {
    mockPosts[index] = post;
  }

  return post;
};

export const createPost = async (post: Post) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Задержка 500ms
  mockPosts.unshift(post);
  return post;
};
