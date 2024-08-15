import React, { useState } from 'react'

const AddTask = ({addTask}) => {
  const [value, setvalue] = useState('');

 const addItem=()=>{
 addTask(value);
 setvalue('');
 }

  return (
    <>
      <div className='Input-container'>
        <input type="text" placeholder=' Enter Your Task..' className='Input'
        value={value}
          onChange={(event) => {setvalue(event.target.value); }} />
        <button className='Add-btn' onClick={addItem}>ADD</button>
      </div>

    </>
  )
}

export default AddTask
