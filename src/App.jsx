import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';


const App = () => {
  const[todo,setTodo]=useState('')
  const[todos,setTodos]=useState([])

  const handleDelete =()=>{
    let id = e.target.name;

  }
  const handleEdit =()=>{
    
  }
  const handleCheckbox =(e)=>{
   let id=e.target.name;
   let index = todos.findIndex(item=>{
    return item.id === id;
   })
   let newTodos  =[...todos]
   newTodos[index].isCompleted = !newTodos[index].isCompleted
   setTodos(newTodos)
  }
  const handleAdd =()=>{
    setTodos([...todos,{id:uuidv4(),todo,isCompleted:false}])
    setTodo('')
    console.log('added')
  }
  const handleChange =(e)=>{
    setTodo(e.target.value);

  }
  return (
  <>
   <Navbar/>
   <div className='bg-violet-100 my-5 container rounded mx-auto p-5'>
    <div className='add a todo'>
      <h2 className='text-lg font-bold'>Add Todo</h2>
      <input onChange={handleChange} value={todo} className='w-1/2 py-2 bg-zinc-300 pl-2 rounded text-1xl' type="text" placeholder='enter text'/>
      <button onClick={handleAdd} className='px-3 py-2 text-black bg-violet-500 ml-4  rounded-lg hover:bg-violet-600 cursor-pointer'>Add Task</button>
    </div>
    <h2 className='text-lg font-bold mt-5'>Your Todos</h2>
    <div className='todos'>
      {todos.map(item=>{
        
return(
      
      <div className='todo flex justify-between w-1/3 my-3'>
        <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted}  />
        <div className={item.isCompleted?'line-through':''}>{item.todo}</div>
          <div className='button ml-4'>
            <button onClick={handleEdit} className='p-1 bg-violet-500 mr-3 rounded-lg text-white cursor-pointer hover:bg-violet-600 px-2'>Edit</button>
            <button onClick={()=>handleDelete(item.id)} className='p-1 bg-violet-500 rounded-lg px-2   text-white cursor-pointer hover:bg-violet-600'>Delete</button>
          </div>
        </div>
        )})}
      </div>
    </div>
   
  
  </>
  )
}

export default App
