import React from 'react';
import TaskDetail from './TaskDetail';

const Task = ({ selectedTask, task, handleSelectTask }) => {
  const isSelected = selectedTask.id === task.id;
  const status = isSelected ? 'active' : '';
  return (
    <div>
      <li onClick={() => handleSelectTask(task.id)} className={`list-group-item ${status}`}>
        { task.name } 
      </li>  
      { isSelected ? <TaskDetail task={task} /> : '' }
    </div>
  ) }

export default Task;
