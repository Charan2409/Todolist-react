import React,{useState} from 'react'
import TodoList from './TodoList';

const App = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);
  


  const changeHandler = e =>{
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }

  
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
  }
  return (
    <div className='main'>
      <center>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Todo Management Application</h1>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" placeholder='Please type something here...' name="task" value={task} onChange={changeHandler}  required pattern= ".*[^ ].*" /> &nbsp;&nbsp;
              <input type="submit" value="Add" name="Add"/>
              <button onClick={()=>setTodos([])}>Clear All</button>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App