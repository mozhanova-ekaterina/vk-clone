import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { HeartIcon } from "../ui/icons/HeartIcon";
import { MessageIcon } from "../ui/icons/MessageIcon";
import React from "react";
import Link from "next/link";
import { Post } from "@/lib/schemas";
import { observer } from "mobx-react-lite";
import { useStore } from "@/lib/hooks/useStore";
import { formatDistanceToNow } from "date-fns";
import {ru} from "date-fns/locale/ru";

const PostItem = ({ post }: { post: Post }) => {
  const { postStore } = useStore();

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
            onClick={() => postStore.toggleLike(post.id)}
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
        {post.timestamp && (
          <div>
            {formatDistanceToNow(post.timestamp, {
              locale: ru,
              addSuffix: true,
            })}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default React.memo(observer(PostItem));
