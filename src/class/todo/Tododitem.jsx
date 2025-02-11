import React, { useState } from 'react'

const Tododitem = ({title,id,onDeleteTodo,onCheckTodo, isCompleted,onInputChange }) => {
  // console.log(isCompleted)
  const [editing, setEditing] = useState(false);
  const onEditing = (id)=>{
    setEditing(!editing)
  }
  // console.log(editing)
  return (
    <div className='mx-10 my-4 flex flex-row space-x-16 justify-left'>
      <input 
      id={id}
      checked = {isCompleted}
      onChange={()=>onCheckTodo(id, !isCompleted)}
      type="checkbox" 
      className=''/>
      {editing ? 
      <>
      <input onChange={(e)=>onInputChange(id, e.target.value)} type="text" className='border px-4 py-2' value={title}/>
      <button onClick={()=>onEditing(id)} className='bg-green-500 cursor-pointer text-white px-4 py-1 rounded-xl'>Save</button>
      </> : <>
       <label htmlFor="">{title}</label>
            <button onClick={()=>onEditing(id)} className='bg-green-500 text-white cursor-pointer px-4 py-1 rounded-xl'>Edit</button>
      </>
      }
      
      
      <button onClick={()=>onDeleteTodo(id)}  className='bg-red-500 text-white px-4 py-1 cursor-pointer rounded-xl'>Delete</button>

    </div>
  )
}

export default Tododitem
