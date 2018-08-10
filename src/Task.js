import React from 'react';

const Task = ({ task }) => {
  return (
    <li 
      className="list-group-item"
    >{ task.name }</li>  
  )
}

export default Task;
