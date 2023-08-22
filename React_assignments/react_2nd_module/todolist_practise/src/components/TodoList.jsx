import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos: todoListItems, markTodoCompleted , deleteTodo}) => {
  return (
    <div>
      <h3>Todo List</h3>
      <ul style={{ listStyleType: "none" }}>
        {todoListItems.map((todo) => (
          <TodoItem
            completed={todo.completed}
            title={todo.title}
            id={todo.id}
            markCompleted={(id, completed) => markTodoCompleted(id, completed)}
            deleteTodo={(id) => deleteTodo(id)}
          />
        ))}
      </ul>
    </div>
  );
};
