import React, { useState } from "react";
import { Todo } from "../constants";
import { addTodo } from "../api";

export const TodoInput = () => {
  const [title, setTitle] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo:Todo={
        title,
        status:false,
    };
    addTodo(newTodo)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
