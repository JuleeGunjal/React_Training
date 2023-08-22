export const TodoItem = ({ completed, title, id, markCompleted }) => {
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => markCompleted(id, e.target.checked)}
      />
      <label style={{ paddingLeft: "2rem" }}>{title}</label>
    </li>
  );
};
