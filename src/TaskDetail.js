import React from 'react';
import moment from 'moment';
   
const TaskDetail = ({ duration, start, stop, task, completeTask }) => {
    const elapsed = moment.duration(duration, 'seconds');
    const h = elapsed.get('hours');
    const m = elapsed.get('minutes') % 60;
    const s = elapsed.get('seconds') % 60;

    return (
       <li className='list-group-item'>
          <h5>{ task.name }</h5>
          <h6 className="card-subtitle mb-2 text-muted">{ `${h} hr ${m} min ${s} sec` }</h6>
          <p className="card-text">{ task.notes }</p>
          <ul>
            { task.tags.map( (tag, i) => <li key={i}>{ tag }</li> ) }
          </ul>
          <button type="button" className="btn btn-primary" onClick={() => start()}>Start</button>
          <button type="button" className="btn btn-danger" onClick={() => stop()}>Stop</button>
          <button onClick={() => completeTask(task.id, duration)} type="button" className="btn btn-success">Complete</button>
       </li>
    )
}

export default TaskDetail;
