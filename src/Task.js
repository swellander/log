import React from 'react';

const Task = ({ selectedTask, task, handleSelectTask }) => {
  const isSelected = selectedTask.id === task.id;
  const status = isSelected ? 'active' : '';
  return (
    <li onClick={() => handleSelectTask(task.id)} className={`list-group-item ${status}`}>
      <input type="checkbox" aria-label="Checkbox for following text input" />   { task.name } 
    </li>  
  ) }

export default Task;
