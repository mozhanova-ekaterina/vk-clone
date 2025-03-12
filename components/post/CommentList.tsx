import { Comment } from "@/lib/schemas";
import CommentItem from "./CommentItem";
import { CommentInput } from "./CommentInput";
import { useStore } from "@/lib/hooks/useStore";
import { observer } from "mobx-react-lite";

type Props = {
  comments: Comment[];
  postId: string;
};

export const CommentList = observer(({ comments, postId }: Props) => {
  const { postStore } = useStore();

  return (
    <div className="flex flex-col gap-5">
      <CommentInput postId={postId} onAddComment={postStore.addComment} />

      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
});
