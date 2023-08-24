import { useState } from "react";
import "../Form.css";

export const AddTodoItem = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState(
    new Date().toISOString().substr(0, 10)
  );
  const [message, setMessage] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newTodo = {
      title: title,
      dueDate: dueDate,
      completed: false,
    };

    try {
      const response = await fetch("http://localhost:8002/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      if (response.ok) {
        setMessage("Todo item created successfully!");
        addTodo(title, dueDate);
      } else {
        setMessage("Failed to create todo item");
      }
    } catch (error) {
      console.error("Error creating todo:", error);
      setMessage("An error occurred while creating the todo item");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        <div>
          <label>Todo Title: </label>
          <input type="text" value={title} onChange={handleTitleChange}></input>
        </div>
        <div>
          <label>Due Date:</label>
          <input type="date" value={dueDate} onChange={handleDueDateChange} />
        </div>
        <button>Add Todo</button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
};
