"use client";
import { observer } from "mobx-react-lite";
import { PostItem } from "../post/Post";
import { useStore } from "@/lib/hooks/useStore";
import { useCallback, useEffect } from "react";
import { SkeletonPost } from "../skeletons/SkeletonPost";

export const Feed = observer(() => {
  const { postStore } = useStore();

  useEffect(() => {
    if (postStore.posts.length === 0) {
      postStore.loadPosts(true);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (
      scrollTop + clientHeight >= scrollHeight - 500 &&
      !postStore.isFetchingMore &&
      postStore.hasMore
    ) {
      postStore.loadPosts();
    }
  }, [postStore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  //В useEffect функция, возвращаемая через return, называется функцией
  //очистки (cleanup function). Она выполняется в двух случаях:
  //Перед повторным выполнением эффекта (если изменились зависимости)
  //При размонтировании компонента

  return (
    <div className="flex flex-col gap-5">
      {postStore.isLoading ? (
        Array.from({ length: 10 }).map((_, i) => (
          <SkeletonPost key={`skeleton-${i}`} />
        ))
      ) : (
        <>
          {postStore.posts.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              toggleLike={() => postStore.toggleLike(post.id)}
            />
          ))}

          {postStore.isFetchingMore &&
            Array.from({ length: 2 }).map((_, i) => (
              <SkeletonPost key={`skeleton-more-${i}`} />
            ))}

          {!postStore.hasMore && (
            <div className="text-center py-4 text-gray-500">
              Вы достигли конца ленты
            </div>
          )}
        </>
      )}

      {postStore.error && (
        <div className="text-red-500 text-center p-4">{postStore.error}</div>
      )}
    </div>
  );
});
