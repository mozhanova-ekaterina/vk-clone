import { Comment } from "@/lib/schemas";
import { Button } from "../ui/button";
import Image from "next/image";

const CommentItem = ({ comment }: { comment: Comment }) => {
  return (
    <div key={comment.id}>
      <div className="flex gap-2">
        <Image
          src={comment.author.avatar}
          alt={comment.author.name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-bold">{comment.author.name}</span>
          <span>{comment.text}</span>
          <Button className="max-w-fit p-0" variant={"link"}>
            Ответить
          </Button>
          {/* <Input autoFocus/> */}
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
