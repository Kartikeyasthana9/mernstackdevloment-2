import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {

    const [todolist, setTodolist] = useState([])
    const [task, setTask] = useState("")

    const addTodo = () => {
        // todolist.push(task)  wrong method

        
        setTodolist([...todolist, task]);
        setTask("");
        }

   
    
    const removeTodo = (index) => {
        let temp = todolist;
        temp.splice(index, 1)
      setTodolist([...temp])
      
    }
    
    

    const showTodolist = () => {
        return todolist.map((task, i) => (
            <div className='task'>
                <p>{task}{i}</p>
                <button onClick={()=>{removeTodo(i)}} className='btn btn-danger ml-auto'>
                   <i class= "fas fa-trash"></i>
                </button>
            </div>
        ))
    }


    return (
        <div className='container'>
            <div className='card'>
                <div className='card-header'>
                    <h4>ToDO List</h4>


                </div>

                <div className='card-body'>
                    <div className='input-group'>
                        <input className='form-control'value={task} onChange={(e) => { setTask(e.target.value) }} />
                        <button className='btn btn-primary' onClick={addTodo}>Add New Task</button>
                    </div>
                    {showTodolist()}
                </div>


            </div>
        </div>

    )
}

export default Todo