import React, { useState } from "react";

const Form = ({addTodo}) => {
  
  const [todoContent, setTodoContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({content:todoContent,compeleted:false});
    setTodoContent("")
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-600 sm:w-max w-full m-auto h-20 flex items-center sm:justify-center justify-between sm:gap-3 px-4 py-2 sm:rounded-md"
    >
      <input
        type="text"
        placeholder="enter todo here..."
        value={todoContent}
        onChange={(e) => {
          setTodoContent(e.target.value);
        }}
        className="px-4 py-2 rounded-md bg-gray-400 text-black capitalize sm:text-xl outline-none border-2 border-transparent transition-all placeholder:text-black focus:border-gray-900"
      />
      <button
        className="px-4 py-2 rounded-md bg-green-600 capitalize sm:text-xl text-sm cursor-pointer transition-all
        hover:bg-green-800"
      >
        add
      </button>
    </form>
  );
};

export default Form;
