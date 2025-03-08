import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { HeartIcon } from "../ui/icons/HeartIcon";
import { MessageIcon } from "../ui/icons/MessageIcon";
import React from "react";
import Link from "next/link";
import { Post } from "@/lib/schemas";

export const PostItem = React.memo(
  ({ post, toggleLike }: { post: Post; toggleLike: () => void }) => {
    return (
      <Card>
        <CardHeader>
          <div className="flex gap-2 items-center">
            {post.author.avatar && (
              <Image
                className="h-10 w-10 rounded-full cursor-pointer"
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
              />
            )}
            <Link scroll={false} href={`/post/${post.id}`}>
              {post.caption}
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          {post.imageUrl && (
            <Image
              className="w-full"
              src={post.imageUrl}
              alt={post.caption}
              width={800}
              height={600}
            />
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div
              onClick={toggleLike}
              className="inline-flex cursor-pointer items-center gap-2 hover:opacity-50 transition-opacity"
            >
              <HeartIcon variant={post.liked ? "liked" : "unliked"} />
              {post.likes}
            </div>
            <Link
              href={`/post/${post.id}`}
              scroll={false}
              className="inline-flex items-center gap-2 hover:opacity-50 transition-opacity"
            >
              <MessageIcon className="cursor-pointer" />
              {post.comments.length}
            </Link>
          </div>
          {post.timestamp && <div>{post.timestamp.toLocaleString()}</div>}
        </CardFooter>
      </Card>
    );
  }
);

PostItem.displayName = "PostItem";
