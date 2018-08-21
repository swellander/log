import React from 'react';
import Task from './Task';
import axios from 'axios';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';

const component = withRouter(props => <TaskList {...props}/>);

class TaskList extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTask: {} 
    }
    this.completeTask = this.completeTask.bind(this); 
    this.onSelectTask = this.onSelectTask.bind(this);
  }

  async onSelectTask(id) {
    if(this.state.selectedTask.id === id) {
      this.setState({ selectedTask: {} });
      return;
    }
    const response = await axios.get('/api/tasks/' + id);
    this.setState({ selectedTask: response.data });
  }

  completeTask(id, duration) {
    axios.put('/tasks/' + id, {duration, complete: true, inProgress: false})
      .then( response => console.log(response.data))
      .catch(err => console.log(err));
  }


  render() {
    const { tasks } = this.props;
    const path = this.props.location.pathname;
    console.log(path);
    return (
      <div className='col-sm-5 container'>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className={`nav-link ${ path === '/' ? 'active' : '' }`} to='/'>Today</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${ path === '/backlog' ? 'active' : '' }`} to='/backlog'>Backlog</Link>
          </li>
        </ul>
        <ul className="list-group">
          {tasks.map( task =>  {
            return (
              <Task 
                completeTask={this.completeTask}
                handleSelectTask={this.onSelectTask} 
                selectedTask={this.state.selectedTask}
                key={task.id} 
                task={task} 
              />
            )
          })} 
        </ul>
      </div>
    );
  }
};

export default component;
