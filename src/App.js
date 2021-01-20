import React,{useState,useEffect} from "react"
import "./App.css"
import Form from './components/Form'
import Todolist from './components/Todolist';


function App() {
  

  //states
  const[Inputtext,setInputText]=useState("")
  const[todos,setTodos]=useState([])
  const[status,setstatus]=useState('all')
  const[filteredTodos,setfilteredTodos]=useState([])
  //Run once When the app start
  useEffect(()=>{
    getlocaltodos()
  },[])


  //useEffect


useEffect(()=>{
  filterHandler()
  savelocaltodos()
},[todos,status])

//function
 const filterHandler =()=>{
   switch(status){
     case 'completed':
       setfilteredTodos(todos.filter(todo=>todo.completed===true ))
       break;
       case 'uncompleted':
        setfilteredTodos(todos.filter(todo=>todo.completed===false ))
        break;
        default:
          setfilteredTodos(todos)
          break
       }
 }

 //save localtodos
 const savelocaltodos = ()=>{
  
  localStorage.setItem('todos',JSON.stringify(todos))
 
}
 const getlocaltodos = () => {
  if(localStorage.getItem('todos')==null){
    localStorage.setItem('todos',JSON.stringify([]))
  }
  else{
   let todolocal= JSON.parse(localStorage.getItem('todos'))
   setTodos(todolocal)
  }

}


  return (
  <div className='App'>
    <header> 
      <h1>My ToDo's List</h1>
    </header>
    <Form 
    todos={todos} 
    setTodos={setTodos} 
    Inputtext={Inputtext} 
    setInputText={setInputText}
    setstatus={setstatus}
     />
    <Todolist 
    setTodos={setTodos}  
    todos={todos}
    filteredTodos={filteredTodos}
    />
  </div>
)
}
export default App