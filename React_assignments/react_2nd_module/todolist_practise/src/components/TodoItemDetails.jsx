import { useParams } from "react-router-dom/cjs/react-router-dom.min"

export const TodoItemDetails = ({todos}) => {
  const { id } = useParams();

  const todo = todos.find((todo) => todo.id === Number(id));

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return (
    <div>
      <h2>Todo Details</h2>
      <h3>Title:  {todo.title}</h3>
      <p>Completed: {todo.completed ? "Completed" : "Not Completed"} </p>
    </div>
  );

}