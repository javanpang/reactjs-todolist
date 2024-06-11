import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  // Destructure the todos array from the props object
  const { todos } = props;

  return (
    <ul className="main">
      {/* Map over each todo in the todos array along with its index. 
      For each todo, render a TodoCard component with a key of todoIndex and the todo text */}
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
};

export default TodoList;
