import React, { useState,useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState([ ]);

  const [selection,setSelection]=useState("all");

  const getLocalTodos=()=>{
    if(localStorage.getItem("todos")===null){
      setTodos([]);
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }

  useEffect(()=>{
    getLocalTodos();
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));

  },[todos]);

  return (
    <div className="App">
      <header>
        <h1>Alx ToDo List!</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        selection={selection}
        setSelection={setSelection}
      />
      <ToDoList todos={todos} setTodos={setTodos} selection={selection} setSelection={setSelection} />
    </div>
  );
}

export default App;
