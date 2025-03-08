"use client";

import { PostItem } from "@/components/post/Post";
import { SkeletonPost } from "@/components/skeletons/SkeletonPost";
import { Modal } from "@/components/ui/modal";
import { useStore } from "@/lib/hooks/useStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

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
        {postStore.currentPost && (
          <PostItem
            toggleLike={() => postStore.toggleLike(id)}
            post={postStore.currentPost}
          />
        )}
        {postStore.isPostLoading && !postStore.currentPost && <SkeletonPost />}
      </div>
    </Modal>
  );
});
