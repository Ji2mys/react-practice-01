import { useEffect, useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

export default function PostsList({ onStopPosting, isPosting }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const parsedPosts = await response.json();
      console.log(parsedPosts["posts"]);
      setPosts(parsedPosts["posts"]);
    }
    getPosts();
  }, []);

  const newPostHandler = (newPost) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(newPost),
    });
    setPosts((prev) => [newPost, ...prev]);
  };

  const modalContent = (
    <Modal onClose={onStopPosting}>
      <NewPost onCancel={onStopPosting} onSubmit={newPostHandler} />
    </Modal>
  );

  return (
    <>
      {isPosting && modalContent}
      <ul className={classes.posts}>
        {posts.length > 0 &&
          posts.map((post) => (
            <Post author={post.author} body={post.body} key={post.id} />
          ))}
      </ul>
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
