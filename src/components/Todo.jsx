import React from 'react';
import clsx from 'clsx';
import { MdOutlineCancel } from  "react-icons/md";
import { useTodoLayerValue } from '../context/todoContext';

const Todo = ({ todo}) => {
    const [{ } ,dispatch]=useTodoLayerValue();

    const removeTodo=(todoId) => {
   dispatch({
       type:"REMOVE_TODO",
       payload: todoId,
      });
    }
    
    const completeTodo=(todoId) => {
        dispatch({
            type:"COMPLETED_TODO",
            payload: todoId,
           });
         }

         const todoStyle =clsx ({
            ["todo-row"]:true,
            ["completed"]:todo.isCompleted,
         });

  return (
    <div className={todoStyle}>
        <div onClick={()=> completeTodo(todo.id)}>{todo.content} </div>

        <div className='todo-icons'>
            <MdOutlineCancel 
            className="todo-icon" 
            onClick={()=>removeTodo(todo.id)}
             />
        </div>
    </div>
  )
}

export default Todo;