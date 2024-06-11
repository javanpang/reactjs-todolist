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

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
