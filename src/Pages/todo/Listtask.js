import React from 'react'

const Listtask = ({ task, index, removeTask }) => {
  return (
    <>
      <div className='list-Tasks'>
        {task.title}
        <button className='Delete-btn' onClick={()=>{removeTask(index)}}>Delete</button>
      </div>
    </>
  )
}

export default Listtask
