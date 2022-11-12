import React, { useState } from "react";
import Todo from "../components/Todo/Todo";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'

const Task = () => {
// Counter is a state initialized to 0
const [text, setText] = useState("")
const [tasks, setTasks] = useState([])
const [id, setId] = useState(0)
const [date, setDate] = useState()

const handleText = (e) => {
    setText(e.target.value)
}

const handleDate = (e) => {
    setDate(e.target.value)
}

const handleAdd = () => {
        setText('');
        setDate('');
        setId(id + 1);
        tasks.push({
          id: id,
          text: text,
          date: date,
        });
}

function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  

return (
    <div>
      <Card>
        <h1>Add Task</h1>
        <TextField
            value={text}
            onChange={handleText}
            label="Title"
        />
        <TextField type="date" value={date} onChange={handleDate}/>
        <Button onClick={handleAdd}>Add</Button></Card>
      <Box>
        {tasks.map(task => (
          <Todo text={task.text} id={task.id} deleteTask={deleteTask} date={task.date}></Todo>
        ))}
      </Box>
    </div>
  );

}

export default Task
