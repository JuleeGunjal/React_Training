import React, { useState } from 'react';

const TodoList = () => {
  const [toDos, setToDos] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Finish homework', completed: false },
    { id: 3, text: 'Go for a run', completed: false }
  ]);

  const markCompleted = (id) => {
    const updatedToDos = toDos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setToDos(updatedToDos);
}
const deleteTodo = (id) => {
    const updatedToDos = toDos.filter((todo) => todo.id !== id);
    setToDos(updatedToDos);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <table>
        {toDos.map((todo) => (
          <tr key={todo.id} className={todo.completed ? "completed" : ""}>
            <td>{todo.text}</td>

            <td
              className="mark-completed"
              onClick={() => markCompleted(todo.id)}
            >
              {todo.completed ? "UnMark" : "Mark"} Completed
            </td>
            <td className="delete-button" onClick={() => deleteTodo(todo.id)}>
              Delete
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
        }

export default TodoList;