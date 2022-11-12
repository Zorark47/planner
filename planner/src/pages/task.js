import React, { useState } from "react";

const Task = () => {
// Counter is a state initialized to 0
const [text, setText] = useState("")
const [tasks, setTasks] = useState([])

const handleText = (e) => {
    setText(e.target.value)
}

let nextId = 0
const handleAdd = () => {
        setText('');
        tasks.push({
          id: nextId++,
          text: text,
        });
}

return (
    <>
      <h1>Add Task</h1>
      <input
        value={text}
        onChange={handleText}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </>
  );

}

export default Task
