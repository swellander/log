import React from 'react';
import moment from 'moment';
   
const TaskDetail = ({ start, stop, task, completeTask }) => {
    const duration = moment.duration(task.duration, 'seconds');
    const h = duration.get('hours');
    const m = duration.get('minutes') % 60;
    const s = duration.get('seconds') % 60;

  console.log('rendering ', task);
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
          <button onClick={() => completeTask(task.id, this.state.elapsed)} type="button" className="btn btn-success">Complete</button>
        </li>
    )
}

export default TaskDetail;
