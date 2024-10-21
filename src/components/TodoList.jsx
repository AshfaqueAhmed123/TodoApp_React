import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <div className="sm:w-1/2 mx-auto sm:mt-10 px-5 py-2 sm:rounded-md sm:mb-20">
      <Todo />
    </div>
  );
};

export default TodoList;
