import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Tododitem from "./Tododitem";
import CompletedTodo from "./CompletedTodo";

const localStorageKey = "reactTodo";
// import { initialTodos } from './data'

const Todo = () => {
  const [todods, setTodos] = useState(()=>{
    const rawDataFromLocalStorage = localStorage.getItem(localStorageKey);
    if( !rawDataFromLocalStorage ) return [];
    return JSON.parse(rawDataFromLocalStorage);
  });
  // console.log(todods)



  //Add data to local storage

localStorage.setItem(localStorageKey, JSON.stringify(todods));


 const onDeleteTodo = (id)=>{
  const todoAfterDelete = todods.filter((item)=> item.id !== id);
  setTodos(todoAfterDelete);
 }

 const onCheckTodo = (id, isCompleted)=>{
  console.log(todods)
  const newTodo = todods.map((todo)=>{
    if(todo.id === id){
      return {
        ...todo,
        isCompleted : isCompleted
      }
    }else{
      return todo
    }
  })
  setTodos(newTodo)
 }

const onInputChange =(id,title)=>{
  const newTodo = todods.map((todo)=>{
    if(todo.id === id){
      return{
        ...todo,
        title
      }
    }else{
      return todo
    }
  })
  setTodos(newTodo)
}


  const onAddTodo = (title) => {
    const newTodo = {
      title,
      isCompleted: false,
      id: todods.length,
    };
    setTodos([...todods, newTodo]);
  };




  return (
    <div className="shadow-amber-600 shadow-2xl rounded-3xl text-center mx-auto my-10 p-10 h-[400px] w-[700px] border overflow-scroll ">
      {/* AddTodo */}
      <AddTodo onAddTodo={onAddTodo} /> <br />
      {/* TodoItem */}
      {todods.map((todo) => {
        return <Tododitem key={todo.id} title={todo.title} id={todo.id} onDeleteTodo={onDeleteTodo} onCheckTodo={onCheckTodo} isCompleted={todo.isCompleted} onInputChange={onInputChange} />;
      })}

      {/* Completed Todos */}
      <CompletedTodo todos={todods.filter((todo)=>todo.isCompleted)} />
    </div>
  );
};

export default Todo;
