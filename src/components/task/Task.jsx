import React from 'react'
import './Task.scss'
import deleteSvg from '../../assets/delete.svg'

const Task = (props) => {

   const className = 'todo-text ' + (props.task.done ? 'todo-done' : '')

   return (
      <div>
         <div className='todo-flex'>
            {props.onChoose ? <input checked={props.task.checked}
               onChange={e => props.handleChange(props.task.id)}
               className="box-label"
               type="checkbox" />
               : null}
            <p onClick={props.doneTask} className={className}>{props.task.title}</p>
            <img onClick={props.deleteTask} src={deleteSvg} alt="delete" />
         </div>
      </div>
   )
}


export default Task;

