import React from 'react';

const TaskDetail = ({ completeTask, task }) => {
  let classes;
  const handleClick = () => {
    completeTask(task.id);
    classes = 'bg-success';
    console.log('green');
  }


  return (
    <div className="col-sm-5 offset-sm-1">
      <div className="card align-middle">
        <div className="card-body">
          <h5 className={classes}>{ task.name }</h5>
          <h6 className="card-subtitle mb-2 text-muted">Time Spent (real-time)</h6>
          <p className="card-text">{ task.notes }</p>
          <ul>
            { task.tags.map( (tag, i) => <li key={i}>{ tag }</li> ) }
          </ul>
          <button type="button" className="btn btn-primary">Start</button>
          <button onClick={() => handleClick()} type="button" className="btn btn-success">Complete</button>
        </div>
      </div> 
    </div>
  )
}

export default TaskDetail;
