import React from 'react';
import Task from './Task';
import moment from 'moment';

const TaskList = ({ selectedTask, handleSelectTask, tasks }) => {
  return (
    <div className='offset-sm-1 col-sm-4'>
      <h3>{ moment().format('dddd MMMM Do, h:mm a') }</h3>
      <ul className="list-group">
        {tasks.map( task =>  {
          return (
            <Task 
              handleSelectTask={handleSelectTask} 
              selectedTask={selectedTask}
              key={task.id} 
              task={task} 
            />
          )
        })} 
      </ul>
    </div>
  );
};

export default TaskList;
