import React from "react";

const Todo = ({todo,todos,setTodos}) => {

  const deleteHandler=(e)=>{
    setTodos(todos.filter((tx)=>(tx.id!==todo.id)));
  }

  const checkHandler=(e)=>{
    const idx = todos.findIndex((tx)=>(tx.id===todo.id));
   
    const todos_copy=Array.from(todos);
    
    todos_copy[idx].completed=!todos_copy[idx].completed;

    setTodos(todos_copy);

  }

  return (
    <div className="todo">
      <li className={`todo-item  ${todo.completed ? "completed":""}`}>{todo.text}</li>
      <button onClick={checkHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
