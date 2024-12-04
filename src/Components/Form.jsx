import { useState } from "react";
import styles from "./form.module.css";

// eslint-disable-next-line react/prop-types
export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          value={todo.name}
          placeholder="Enter todo item"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}