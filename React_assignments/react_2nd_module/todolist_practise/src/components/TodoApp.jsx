import { AddTodoForm } from "./AddTodoForm";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoItemDetails } from "./TodoItemDetails";
import { useCallback, useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom"

export const TodoApp = () => {
  const [showCompleted, setShowCompleted] = useState(false);
  const [addTodoInput, setAddTodoInput] = useState("");
  const history = useHistory();

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
    history?.push("/todos");
  };

  const markTodoCompleted = (id, completed) => {
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

  const deleteTodo = (id) => {
    const updatedData = fetchedTodo.filter((todo) => todo.id !== id);
    console.log(updatedData.count);
    setFetchedTodo(updatedData);
  };

  const displayFiltered = showCompleted
    ? fetchedTodo.filter((todo) => todo.completed === true)
    : fetchedTodo;

  return (
    <div>
      <div>
        {error && <div>{error}</div>}
        {loading && <p>Loading....</p>}
      </div>
      <div>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link className="navbar-link" to="/todos">
                Todo List
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/add-todo">
                Add Todo
              </Link>
            </li>
          </ul>
        </nav>
        <br />
        <br />

        <Switch>
          <Route exact path="/todos">
            <TodoFilter
              showCompleted={showCompleted}
              setShowCompleted={setShowCompleted}
            />
            <TodoList
              todos={displayFiltered}
              markTodoCompleted={(id, completed) =>
                markTodoCompleted(id, completed)
              }
              deleteTodo={(id) => deleteTodo(id)}
            />
          </Route>
          <Route exact path="/add-todo">
            <AddTodoForm
              addTodo={addTodo}
              addTodoInput={addTodoInput}
              setAddTodoInput={setAddTodoInput}
            />
          </Route>
          <Route exact path="/todos/:id">
            <TodoItemDetails todos={todos} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
