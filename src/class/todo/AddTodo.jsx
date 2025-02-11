import React, { useState } from 'react'

const AddTodo = ({onAddTodo}) => {
 
  const [title, setTitle] = useState('');
// console.log(title)

  return (
   
      <div className='mx-10 my-4 flex justify-center gap-6'>
      <input onChange={(e)=>setTitle(e.target.value)} type="text" className='outline-none rounded-md border px-10 py-2'/>
      <button onClick={()=>onAddTodo(title)} className=' cursor-pointer px-6 py-2 rounded-xl bg-amber-600 text-white'>Add</button>
    </div>
    
  )
}

export default AddTodo
