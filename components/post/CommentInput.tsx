import { useRef, useState } from "react";
import { MessageSendIcon } from "../ui/icons/MessageSendIcon";
import { Input } from "../ui/input";

type Props = {
  onAddComment: (postId: string, text: string) => void;
  postId: string;
};

export const CommentInput = ({ onAddComment, postId }: Props) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState("");

  const showPopover = () => {
    popoverRef.current!.classList.remove("hidden");
  };
  const hidePopover = () => {
    popoverRef.current!.classList.add("hidden");
  };
  const handleAddComment = () => {
    onAddComment(postId, text);
    setText("");
  };

  return (
    <div className="relative">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
        autoFocus
      />
      <MessageSendIcon
        onMouseEnter={showPopover}
        onMouseLeave={hidePopover}
        className="absolute right-1 top-2"
      />
      <div
        ref={popoverRef}
        className="border p-4 absolute right-1 bg-background z-10 hidden animate-fade-in"
      >
        Отправка на Enter
      </div>
    </div>
  );
};
