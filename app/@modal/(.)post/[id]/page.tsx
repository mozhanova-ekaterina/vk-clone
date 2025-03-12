"use client";

import { SkeletonPost } from "@/components/skeletons/SkeletonPost";
import { Modal } from "@/components/ui/modal";
import { useStore } from "@/lib/hooks/useStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { PostItem } from "./Post";

export default observer(function PostModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const { postStore } = useStore();

  useEffect(() => {
    postStore.loadPost(id);
    return () => postStore.resetCurrentPost();
  }, []);

  return (
    <Modal>
      <div className="bg-white p-6 rounded-lg w-[600px]">
        {postStore.currentPost && <PostItem post={postStore.currentPost} />}

        {postStore.isPostLoading && !postStore.currentPost && <SkeletonPost />}
      </div>
    </Modal>
  );
});
