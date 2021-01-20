import React from 'react'


const Form = ({Inputtext,setInputText,todos,setTodos,setstatus}) => {
  //Here is Js Code 
  const InputTextHandler = (e)=>{
    console.log(e.target.value)
    setInputText(e.target.value)
  }
  const submitTodoHandler = (e) =>{
    e.preventDefault()
    setTodos([
      ...todos,{text:Inputtext,completed:false,id:Math.random()*1000}
    ])
    setInputText("")
  }
  const statusHanlder=(e)=>{
    console.log(e.target.value)
    setstatus(e.target.value)

  }
    return (
        <form>
      <input value={Inputtext} onChange={InputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHanlder} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    )

}
export default Form