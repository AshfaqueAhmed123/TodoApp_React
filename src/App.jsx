import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("Todos")) || []
  );

  useEffect(() => {
    saveTodos();
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        content: todo.content,
        compeleted: todo.compeleted,
      },
    ]);
  };

  const toggleCompelete = (id) => {
    let newTodos = [];
    todos.map((todo) => {
      if (todo.id == id) {
        newTodos.push({
          id: todo.id,
          content: todo.content,
          compeleted: !todo.compeleted,
        });
      } else {
        newTodos.push(todo);
      }
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    let newTodos = [];
    todos.map((todo) => {
      if (todo.id == id) {
      } else {
        newTodos.push(todo);
      }
    });
    setTodos(newTodos);
  };

  const saveTodos = () => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  };

  return (
    <>
      <div className="w-screen min-h-screen sm:py-5 sm:px-10">
        <Form addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleCompelete={toggleCompelete}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}

export default App;
