import React from 'react';

const TaskDetail = ({ task }) => {
  return (
    <div className="col-sm-5 offset-sm-1">
      <div className="card align-middle">
        <div className="card-body">
          <h5 className="card-title">{ task.name }</h5>
          <h6 className="card-subtitle mb-2 text-muted">Time Spent (real-time)</h6>
          <p className="card-text">{ task.notes }</p>
          <ul>
            { task.tags.map( tag => <li>{ tag }</li> ) }
          </ul>
          <button type="button" className="btn btn-primary">Start</button>
        </div>
      </div> 
    </div>
  )
}

export default TaskDetail;
