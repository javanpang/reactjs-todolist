import React from "react";

const TodoCard = (props) => {
  // Destructures children, handleDeleteTodo, index amd handleEditTodo from props
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <li className="todoItem">
      {/* Renders the children elements within the list. 
      Returns the structure of the todo with an edit and delete icon. */}
      {children}
      {/* Edit button that triggers handleEditTodo function with the index as a parameter when clicked */}
      <div className="actionsContainer">
        <button onClick={() => handleEditTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>

        {/* Delete button has an onClick event that triggers handleDeleteTodo function 
        with the index as a parameter */}
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
