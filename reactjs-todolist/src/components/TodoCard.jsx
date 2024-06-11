import React from "react";

const TodoCard = (props) => {
  // Destructures children from props
  const { children } = props;
  return (
    <li className="todoItem">
      {/* Renders the children elements within the list. 
      Returns the structure of the todo with an edit and delete icon. */}
      {children}
      <div className="actionsContainer">
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-regular fa-trash-can"></i>
      </div>
    </li>
  );
};

export default TodoCard;
