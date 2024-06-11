import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // Initialise the todos state as an empty array
  const [todos, setTodos] = useState([]);

  // Define the handleAddTodos function to update the todos state by adding a new todo.
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  // Define the handleDeleteTodo function to remove a todo from the todos list based on the index.
  function handleDeleteTodo(index) {
    // Create a new array newTodoList by filtering out the todo item at the specified index.
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    // Update the todos state with the new filtered array.
    setTodos(newTodoList);
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  );
}

export default App;
