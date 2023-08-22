export const TodoItem = ({
  completed,
  title,
  id,
  markCompleted,
  deleteTodo,
}) => {
  return (
    <li key={id} className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => markCompleted(id, e.target.checked)}
      />
      <label style={{ paddingLeft: "2rem" }}>{title}</label>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
};
