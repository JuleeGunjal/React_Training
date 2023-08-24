import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const TodoItem = ({
  completed,
  title,
  id,
  deuDate,
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
      <Link className="link-highlight" to={`/todos/${id}`}>
        {title}
      </Link>
      <label style={{ paddingLeft: "2rem" }}></label>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
};
