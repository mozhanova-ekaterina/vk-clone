import { Comment } from "@/types/comments";
import { NextResponse } from "next/server";

const comments: Comment[] = Array.from({ length: 100 }, (_, i) => ({
  id: `${i + 1}`,
  postId: "1",
  text: `Комментарий ${i + 1}`,
  author: `Пользователь ${Math.floor(Math.random() * 10)}`,
}));

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");
  const page = Number(searchParams.get("page")) || 1;

  const pageSize = 10;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const filtered = comments.filter((c) => c.postId === postId);
  const paginated = filtered.slice(start, end);

  await new Promise((resolve) => setTimeout(resolve, 800));

  return NextResponse.json({
    data: paginated,
    nextPage: end < filtered.length ? page + 1 : null,
  });
}
