import React from "react";
import Todo from "./Todo";

const ToDoList = ({ todos, setTodos, selection }) => {
    
  const filtered_todo = todos.reduce((acc, t) => {
    if (selection === "all") {
      acc.push(t);
    } else {
      if (t.completed === (selection === "completed" ? true : false)) {
        acc.push(t);
      }
    }

    return acc;
  }, []);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtered_todo.map((todo) => (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
