import React from 'react';

const Task = ({ selectedTask, task, handleSelectTask }) => {
  const isSelected = selectedTask.id === task.id;
  const status = isSelected ? 'active' : '';
  const completed = task.completed ? 'bg-success' : '';
  console.log(completed);
  return (
    <li onClick={() => handleSelectTask(task.id)} className={`list-group-item ${status} ${completed}`}>
      { task.name } 
    </li>  
  ) }

export default Task;
