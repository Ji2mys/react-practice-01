import PostsList from "./components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts");
  const parsedPosts = await response.json();
  return parsedPosts.posts;
};

export default Posts;
