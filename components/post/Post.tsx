import { Post } from "@/types/post";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { HeartIcon } from "../ui/icons/HeartIcon";
import { MessageIcon } from "../ui/icons/MessageIcon";
import React from "react";
import Link from "next/link";

export const PostItem = React.memo(({ post }: { post: Post }) => {
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
          <Link
            // key={post.id}
            // as={`/post/${post.id}?modal=true`}
            scroll={false}
            href={`/post/${post.id}`}
          >
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
        <div className="flex gap-2">
          <HeartIcon className="cursor-pointer" />
          <MessageIcon className="cursor-pointer" />
        </div>
        {post.timestamp && <div>{post.timestamp.toLocaleString()}</div>}
      </CardFooter>
    </Card>
  );
});

PostItem.displayName = "PostItem";
