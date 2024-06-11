import React from "react";

const TodoCard = (props) => {
  // Destructures children, handleDeleteTodo and index from props
  const { children, handleDeleteTodo, index } = props;
  return (
    <li className="todoItem">
      {/* Renders the children elements within the list. 
      Returns the structure of the todo with an edit and delete icon. */}
      {children}
      <div className="actionsContainer">
        <button>
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
