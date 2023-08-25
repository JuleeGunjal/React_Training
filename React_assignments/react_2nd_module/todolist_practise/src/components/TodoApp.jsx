import { AddTodoForm } from "./AddTodoForm";
import { TodoFilter } from "./TodoFilter";
import { TodoList } from "./TodoList";
import { TodoItemDetails } from "./TodoItemDetails";
import { useMemo,useCallback, useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AddTodoItem } from "./AddTodoItem";

export const TodoApp = () => {
  const [showCompleted, setShowCompleted] = useState(false);
  const [addTodoInput, setAddTodoInput] = useState("");
  const history = useHistory();
  const [fetchedTodo, setFetchedTodo] = useState([]);

  const getTodos = useCallback(async () => {
    const response = await fetch("http://localhost:8002/todos");

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    return response.json();
  }, []);

  const { todos, loading, error } = useFetch(getTodos);

  useEffect(() => {
    if (todos) {
      setFetchedTodo(todos);
    } else return;
  }, [todos]);

  const addTodo = (title, dueDate) => {
    setFetchedTodo([
      ...fetchedTodo,
      { id: fetchedTodo.length + 1, title, completed: false, dueDate },
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


  const displayFiltered = showCompleted
    ? fetchedTodo.filter((todo) => todo.completed === true)
    : fetchedTodo;


   const [search, setSearch] = useState("");
  //  const filteredTodos = displayFiltered.filter((todo) =>
  //    todo.title.includes(search)
  //  );

   const filteredTodos = useMemo(() => {
     return displayFiltered.filter((todo) => todo.title.includes(search));
   }, [displayFiltered, search]);

  const deleteTodo = (id) => {
    const updatedData = fetchedTodo.filter((todo) => todo.id !== id);
    setFetchedTodo(updatedData);
  };

  return (
    <div>
      <div>
        {error && <div>{error}</div>}
        {loading && <p>Loading....</p>}
      </div>

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
            filteredTodos={filteredTodos}
            search={search}
            setSearch={setSearch}
          />
        </Route>
        <Route exact path="/add-todo">
          <AddTodoForm
            addTodo={addTodo}
            addTodoInput={addTodoInput}
            setAddTodoInput={setAddTodoInput}
          />
        </Route>
        <Route exact path="/add-todo-form">
          <AddTodoItem addTodo={addTodo} />
        </Route>
        <Route exact path="/todos/:id">
          <TodoItemDetails todos={todos} />
        </Route>
      </Switch>
    </div>
  );
};
