import { createPost, fetchPostById, fetchPosts } from "@/lib/api/posts/route";
import { Post } from "@/lib/schemas";
import { makeAutoObservable, runInAction } from "mobx";

export class PostStore {
  posts: Post[] = [];
  currentPost: Post | null = null;
  isPostLoading: boolean = false;
  comments: Comment[] = [];
  commentsPage: number = 1;
  commentsTotal: number = 0;
  areCommentsLoading: boolean = false;
  currentPage = 1;
  isLoading = false;
  isFetchingMore = false;
  hasMore = true;
  error: string | null = null;
  postError: string | null = null;

  // isLoading — начальная загрузка (первый запрос)
  //isFetchingMore — последующие запросы (пагинация)

  constructor() {
    makeAutoObservable(this);
  }

  toggleLike = (postId: string) => {
    const post = this.posts.find((post) => post.id === postId);
    if (post) {
      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;
    }
    console.log('liked');
    
  };

  async loadPosts(initialLoad = false) {
    try {
      if (this.isFetchingMore || !this.hasMore) return;

      runInAction(() => {
        if (initialLoad) {
          this.isLoading = true;
          this.currentPage = 1;
        } else {
          this.isFetchingMore = true;
        }
      });

      const { data, total } = await fetchPosts(this.currentPage);

      runInAction(() => {
        this.posts = initialLoad ? data : [...this.posts, ...data];
        this.currentPage += 1;
        this.hasMore = this.posts.length < total;
        this.error = null;
      });
    } catch (error) {
      runInAction(() => {
        this.error = "Ошибка загрузки постов";
        console.log("Ошибка загрузки постов", error);
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
        this.isFetchingMore = false;
      });
    }
  }

  async loadPost(id: string) {
    try {
      runInAction(() => {
        this.currentPost = null;
        this.postError = null;
        this.isPostLoading = true;
      });

      const post = await fetchPostById(id);

      runInAction(() => {
        this.currentPost = post as Post;
        this.postError = null;
      });
    } catch (error) {
      runInAction(() => {
        this.postError = "Ошибка загрузки поста";
        console.log("Ошибка загрузки поста", error);
      });
    } finally {
      runInAction(() => {
        this.isPostLoading = false;
      });
    }
  }

  resetCurrentPost() {
    this.currentPost = null;
    this.comments = [];
    this.postError = null;
  }

  async addPost(caption: string, imageFile: File) {
    try {
      const newPost = await createPost({ caption, imageFile });
      runInAction(() => {
        this.posts.unshift(newPost);
      });
    } catch (error) {
      console.error("Ошибка создания поста:", error);
    }
  }
}

//Когда использовать runInAction?
//После await в асинхронных методах
//При изменении нескольких наблюдаемых полей подряд
//В колбэках (например, в setTimeout или сторонних библиотеках)

//runInAction — это способ явно сказать MobX:runInAction — это способ явно сказать MobX:
//"Всё, что внутри этого блока — единое атомарное изменение состояния, обработай его как одно целое".
