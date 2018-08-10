import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <ul className="list-group">
      { tasks.map( task =>  <Task key={task.id} task={task} />) } 
    </ul>
  );
};

export default TaskList;
