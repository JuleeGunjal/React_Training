import { useMemo ,useState } from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos,
  markTodoCompleted,
  deleteTodo,
  search,
  setSearch,
  filteredTodos,
}) => {
  const [sortDirection, setSortDirection] = useState(0);
  const [status, setStatus] = useState("All");

  // const sortedList = filteredTodos.sort((a, b) =>
  //   sortDirection === 0
  //     ? a.title > b.title
  //       ? 1
  //       : -1
  //     : a.title > b.title
  //     ? -1
  //     : 1
  // );

  // const listStatus = () => {
  //   if (status === "All") {
  //     return sortedList;
  //   } else if (status === "Completed") {
  //     return sortedList.filter((todo) => todo.completed === true);
  //   } else if (status === "Pending") {
  //     return sortedList.filter((todo) => todo.completed === false);
  //   }
  // };

  // const lists = listStatus();

  const sortedList = useMemo(() => {
    return filteredTodos.sort((a, b) =>
      sortDirection === 0
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
  }, [sortDirection, filteredTodos]);

  const listStatus = useMemo(() => {
    if (status === "All") {
      return sortedList;
    } else if (status === "Completed") {
      return sortedList.filter((todo) => todo.completed === true);
    } else if (status === "Pending") {
      return sortedList.filter((todo) => todo.completed === false);
    }
  }, [status, sortedList]);

  return (
    <div>
      <h3>Todo List</h3>
      <label>Search: </label>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <label style={{ marginLeft: "20px" }}>Sort : </label>
      <select onChange={(e) => setSortDirection(e.target.value)}>
        <option value={0}>A-Z</option>
        <option value={1}>Z-A</option>
      </select>
      <label style={{ marginLeft: "20px" }}>Status : </label>
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option selected value="All">
          All
        </option>
      </select>
      <ul style={{ listStyleType: "none" }}>
        {listStatus?.map((todo) => (
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


