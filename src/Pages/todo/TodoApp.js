import React, { useState } from 'react'
import './TodoApp.css'
import Addtask from './Addtask'
import Listtask from './Listtask'

const TodoApp = () => {
  const [task, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = [...task, { title }]
    setTasks(newTask);
  };
const removeTask =(index)=>{
  const newTask=[...task]
  newTask.splice(index,1)
  setTasks(newTask)
}


  return (
    <>
      <div className='todo-container'>
        <div className='header'> To Do App </div>
        <div className='add-task'>
          <Addtask addTask={addTask} />
        </div>
        <div className='tasks'>
          {task.map((task,index) => (
            <Listtask task={task}  removeTask={removeTask} index={index} key={index}/>
          ))}
        </div>

      </div>
    </>
  )
}

export default TodoApp




















