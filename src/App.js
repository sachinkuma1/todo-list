
import { useState } from 'react';
import './App.css';

function App() {
  
  const [todo, setTodo]=useState("");
  const [todos, setTodos]=useState([]);
  const [editId, setEditId]=useState(0);



function handlesubmit(e){
  e.preventDefault();
 
  if(editId){
    const newtodo=todos.find((i)=>i.id==editId);
    const updatedtodos=todos.map((item)=>{
      if(item.id==editId){
        return (
          {id:item.id, name:todo}
        )
      }else {
        return ({id:item.id, name:item.name})
      }
    })

    setTodos(updatedtodos);
    setEditId(0);
    setTodo("");
    return ;
  }



  setTodos([...todos, {id:`${todo}`, name:todo}]);
  // console.log(todos);
  setTodo("");

}

function handledelete(id){
  const arr=todos.filter((item)=>item.id!=id);
  console.log(arr);
  setTodos([...arr]);
}

function handleEdit(id){
  const temp=todos.find((i)=>i.id==id);
  setTodo(temp.name);
  setEditId(id);
}

// console.log(todos);
  return (
    <div className='app'>
   <div className='container'>
    <div>
      <form  onSubmit={handlesubmit}>
        <input type='text' value={todo}  onChange={(e)=>setTodo(e.target.value)} />
        <button type='submit' >{editId?"edit":"add"}</button>
      </form>
    </div>

    <ul>
    {
      

      todos.map((item)=>(
        <li className='list'  key={item.id}>
      <p className='para'>{item.name}</p>
      <button onClick={()=>handleEdit(item.id)}>edit</button>
      <button onClick={()=>handledelete(item.id)} >delete</button>
      </li>
      ))
    }
      
    </ul>
   </div>
    </div>
  )
}

export default App;
