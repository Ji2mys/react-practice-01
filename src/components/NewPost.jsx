import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel, onSubmit }) {
  const [enteredBody, setEnteredBody] = useState("Enter text");
  const [enteredAuthor, setEnteredAuthor] = useState("Author");

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const postData = {
      id: Math.random(),
      body: enteredBody,
      author: enteredAuthor,
    };
    onSubmit(postData);
    onCancel();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={bodyChangeHandler}
        ></textarea>
      </p>
      <p>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
