/* eslint-disable react/prop-types */

import styles from "./footer.module.css";

export default function Footer({ completedTodo, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Total todos: {totalTodos}</span>
      <span className={styles.item}>Completed: {completedTodo}</span>
    </div>
  );
}
