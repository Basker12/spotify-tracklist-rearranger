import React, { useState, useRef } from 'react';
import ToDoList from './ToDoList';

function App() {
  const [todos, setToDos] = useState([])

  const Name = useRef()

  function handleToDo(e) {
    const name = Name.current.value
    if (name === '') return
    console.log(name)
  }

  return (
    <>
      <ToDoList todos={todos}/>
      <input ref={Name}  type="text" />
      <button onClick={handleToDo}>Add</button>
      <button>Clear To-Do's</button>
      <div>0 Left ToDo's</div>
    </>
    )
}

export default App;
