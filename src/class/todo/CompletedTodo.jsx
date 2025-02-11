import React from 'react'

const CompletedTodo = ({todos}) => {
  return (
    <div className='mt-10'>
        <h1 className='text-black-500 font-semibold text-2xl'>Completed todos</h1>
     {todos.map((todo)=>{
        return (
            <div key={todo.id} className="">
                {todo.title}
            </div>
        )
     })}
    </div>
  )
}

export default CompletedTodo
