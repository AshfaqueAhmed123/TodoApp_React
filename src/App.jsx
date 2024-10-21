import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  return (
    <>
      <div className="w-screen min-h-screen sm:py-5 sm:px-10">
        <Form />
        <TodoList />
      </div>
    </>
  );
}

export default App;
