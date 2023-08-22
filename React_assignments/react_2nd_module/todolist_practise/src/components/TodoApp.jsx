import { AddTodoForm } from "./AddTodoForm";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { useCallback, useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export const TodoApp = () => {
  const [showCompleted, setShowCompleted] = useState(false);
  const [addTodoInput, setAddTodoInput] = useState("");

  const getTodos = useCallback(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    return response.json();
  }, []);

  const { todos, loading, error } = useFetch(getTodos);
  const [fetchedTodo, setFetchedTodo] = useState([]);

  useEffect(() => {
    if (todos) {
      setFetchedTodo(todos);
    } else return;
  }, [todos]);

  const addTodo = (title) => {
    setFetchedTodo([
      ...fetchedTodo,
      { id: fetchedTodo.length + 1, title, completed: false },
    ]);
    setAddTodoInput("");
  };

  const markTodoCompleted = (id, completed) => {
    console.log(id, completed);
    setFetchedTodo(
      fetchedTodo.map((todo) => {
        if (id === todo.id) {
          return { ...todo, completed: completed };
        } else {
          return todo;
        }
      })
    );
  };

  const displayFiltered = showCompleted
    ? fetchedTodo.filter((todo) => todo.completed === true)
    : fetchedTodo;

  return (
    <div>
      <AddTodoForm addTodo={addTodo} addTodoInput={addTodoInput} setAddTodoInput={setAddTodoInput}/>
      <TodoFilter
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
      />
      {error && <div>{error}</div>}
      {loading ? (
        <p>Loading....</p>
      ) : (
        <TodoList
          todos={displayFiltered}
          markTodoCompleted={(id, completed) =>
            markTodoCompleted(id, completed)
          }
        />
      )}
    </div>
  );
};
