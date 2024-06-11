import React, { useState } from "react";

const TodoInput = (props) => {
  // Destructure handleAddTodos from props
  const { handleAddTodos } = props;

  // Initialise todoValue state using useState hook
  const [todoValue, setTodoValue] = useState("");

  return (
    <header>
      {/* Updates todoValues state on input change and clears it on button click. 
      Calls handleAddTodos function with todoValue as argument */}
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
