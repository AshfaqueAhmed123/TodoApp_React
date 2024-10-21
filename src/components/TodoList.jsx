import React, {} from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleCompelete, deleteTodo }) => {
  return (
    <div className="sm:w-1/2 mx-auto sm:mt-10 px-5 py-2 sm:rounded-md sm:mb-20">
      {todos.length === 0 && (
        <h1 className="text-2xl m-auto capitalize text-center">No Todos</h1>
      )}
      {todos.map(({ id, content, compeleted }) => {
        return (
          <Todo
            key={id}
            id={id}
            content={content}
            compeleted={compeleted}
            toggleCompelete={toggleCompelete}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
