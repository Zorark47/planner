import React, { useState } from "react";
import Todo from "../components/Todo/Todo";

const Task = () => {
// Counter is a state initialized to 0
const [text, setText] = useState("")
const [tasks, setTasks] = useState([])
const [id, setId] = useState(0)

const handleText = (e) => {
    setText(e.target.value)
}

const handleAdd = () => {
        setText('');
        setId(id + 1);
        tasks.push({
          id: id,
          text: text,
        });
}

function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
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
          <Todo text={task.text} id={task.id} deleteTask={deleteTask}></Todo>
        ))}
      </ul>
    </>
  );

}

export default Task
