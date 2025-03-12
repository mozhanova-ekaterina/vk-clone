import { CommentList } from "@/components/post/CommentList";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { HeartIcon } from "@/components/ui/icons/HeartIcon";
import { Separator } from "@/components/ui/separator";
import { useStore } from "@/lib/hooks/useStore";
import { Post } from "@/lib/schemas";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale/ru";

type Props = {
  post: Post;
};

export const PostItem = observer(({ post }: Props) => {
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
      <CardFooter className="flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div
              onClick={() => postStore.toggleLike(post.id)}
              className="inline-flex cursor-pointer items-center gap-2 hover:opacity-50 transition-opacity"
            >
              <HeartIcon variant={post.liked ? "liked" : "unliked"} />
              {postStore.currentPost!.likes}
            </div>
          </div>
          {post.timestamp && (
            <div>
              {formatDistanceToNow(post.timestamp, {
                locale: ru,
                addSuffix: true,
              })}
            </div>
          )}
        </div>
        <Separator />
        <CommentList comments={postStore.comments} postId={post.id} />
      </CardFooter>
    </Card>
  );
});

//???:
//понять почему лайк у поста ставится не сразу
