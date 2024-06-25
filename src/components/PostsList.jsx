import Post from "./Post";
import classes from "./PostsList.module.css";

export default function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Max" body="Hello!" />
      <Post author="Manuel" body="New post of the day!" />
    </ul>
  );
}
