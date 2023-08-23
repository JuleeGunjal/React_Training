import { useState } from "react";

export const AddTodoForm = ({ addTodo , setAddTodoInput, addTodoInput}) => {   
  return (
    <div className="d-flex d-gap" style={{ marginLeft: 30 + "em" }}>
      <input
        type="text"
        value={addTodoInput}
        onChange={(e) => setAddTodoInput(e.target.value)}
      ></input>
      <button onClick={() => addTodo(addTodoInput)}>Add Todo</button>
    </div>
  );
};