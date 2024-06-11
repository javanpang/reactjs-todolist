import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // Initialise the todos and todoValue states as an empty array
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  // Define persistData function to store todos in local storage
  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  // Define the handleAddTodos function to update the todos state by adding a new todo and update local storage.
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  // Define the handleDeleteTodo function to remove a todo from the todos list based on the index and update local storage.
  function handleDeleteTodo(index) {
    // Create a new array newTodoList by filtering out the todo item at the specified index.
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    // Update the todos state with the new filtered array.
    setTodos(newTodoList);
  }

  // Define the handleEditTodo function which sets todoValue to the todo at the specified index
  // and deletes it from todos
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  // Retrieves todos from local storage and sets todos state when component mounts.
  useEffect(() => {
    // Check if localStorage is available
    if (!localStorage) {
      return;
    }
    // Retrieve todos from local storage "todos"
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    // Parse the retrieved todos and update the todos state with the parsed value.
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  // Render TodoInput component to add todos and TodoList component to display todos
  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
