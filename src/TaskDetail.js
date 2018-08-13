import React from 'react';
import moment from 'moment';

class TaskDetail extends React.Component {
  constructor() {
    super();

    this.state = {
      elapsed: 0,
      start: 0 
    }

    this.pause = this.pause.bind(this);
    this.tick = this.tick.bind(this);
    this.start = this.start.bind(this);
  }

  tick() {
    this.setState({ elapsed: new Date() - this.state.start }); 
  }

  start() {
    if(this.state.start === 0) this.setState({ start: Date.now() })
    this.timer = setInterval(this.tick, 1000);
  }

  pause() {
    clearInterval(this.timer);
  }

  render() { 
    const { completeTask, task } = this.props;

    const duration = moment.duration(this.state.elapsed);
    const h = duration.get('hours');
    const m = duration.get('minutes') % 60;
    const s = duration.get('seconds') % 60;

    return (
      <div className="col-sm-5 offset-sm-1">
        <div className="card align-middle">
          <div className="card-body">
            <h5>{ task.name }</h5>
            <h6 className="card-subtitle mb-2 text-muted">{ `${h} hr ${m} min ${s} sec` }</h6>
            <p className="card-text">{ task.notes }</p>
            <ul>
              { task.tags.map( (tag, i) => <li key={i}>{ tag }</li> ) }
            </ul>
            <button type="button" className="btn btn-primary" onClick={() => this.start()}>Start</button>
            <button type="button" className="btn btn-warning" onClick={() => this.pause()}>Pause</button>
            <button onClick={() => completeTask(task.id, this.state.elapsed)} type="button" className="btn btn-success">Complete</button>
          </div>
        </div> 
      </div>
    )
  }
}

export default TaskDetail;
