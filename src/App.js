
import './App.css';
import Clock from './clock'; 
import { useState } from 'react';
function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setTodo]= useState('')
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
      <Clock />
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setTodos([...toDos,{id:Date.now() ,text:toDo,status:false}])} className="fas fa-plus"></i>
    </div>
    <div className="todos">
      { toDos.map((obj,index)=>{
      return(
        <div className="todo">
        <div className="left">
          <input key={index} onChange={(e)=>{
            console.log(e.target.checked)
            console.log(obj)
            setTodos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }))
          }} value={obj.status} type="checkbox" name="" id="" />
          <p>{obj.text}</p>
         
        </div>
        <div className="right">
          <i onClick={()=>{
                console.log('clicked')
                setTodos(toDos.filter(obj2=>{
                  if(obj2.id===obj.id){
                    obj2=null
                  }
                  return obj2
                }))
          }} className="fas fa-times"></i>
        </div>
      </div>)
      })}
      {toDos.map((obj,index)=>{
        if(obj.status){
         return( <h1 key={index} >{obj.text}</h1>)
        }
        return null
      })}
    </div>
  </div>
  );
}

export default App;
