import React from 'react';
import moment from 'moment';
   
const TaskDetail = ({ complete, duration, start, stop, task, completeTask }) => {
    const elapsed = moment.duration(duration, 'seconds');
    const h = elapsed.get('hours');
    const m = ('0' + (elapsed.get('minutes') % 60)).slice(-2);
    const s = ('0' + (elapsed.get('seconds') % 60)).slice(-2);
    const completeClass = complete ? 'text-success' : ''; 

    return (
      <li className="list-group-item"> 
          <h6 className="card-subtitle mb-2 text-muted">{ `${h}:${m}:${s}` }</h6>
          <div className="card-text"> 
            {task.notes}
          </div>
          <hr/>
          <ul className="list-inline">
            { task.tags.map( (tag, i) => <li className="list-inline-item" key={i}><i class={`devicon-${tag}-plain`}></i></li> ) }
          </ul>
          <button type="button" className="btn btn-primary" onClick={() => start()}>Start</button>
          <button type="button" className="btn btn-danger" onClick={() => stop()}>Stop</button>
          <button onClick={() => completeTask(task.id, duration)} type="button" className="btn btn-success">Complete</button>
       </li>
    )
}

export default TaskDetail;
