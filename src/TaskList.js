import React from 'react';
import Task from './Task';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';

const sortByDate = (list) => {
  return list.sort( (a, b) => {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  });
}

class TaskList extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTask: {},
      tasks: []
    }
    this.getTodayTasks = this.getTodayTasks.bind(this);
    this.getAllTasks = this.getAllTasks.bind(this);
    this.completeTask = this.completeTask.bind(this); 
    this.onSelectTask = this.onSelectTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  getTodayTasks() {
    axios.get('/api/tasks/today') 
      .then( ({ data }) => this.setState({ tasks: sortByDate(data) }))
      .catch(err => console.log(err))
  }

  getAllTasks() {
    axios.get('/api/tasks') 
      .then( ({ data }) => this.setState({ tasks: sortByDate(data) }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    const { pathname } = this.props.location;
    console.log('mounted', pathname);
    if (pathname === '/') this.getTodayTasks();
    else this.getAllTasks();
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
    console.log(id, 'completed');
    axios.put('/tasks/' + id, {duration, complete: true, inProgress: false})
      .then( response => console.log(response.data))
      .catch(err => console.log(err));
  }

  deleteTask(id) {
    axios.delete('/api/tasks/' + id)
      .then(() => this.setState({ tasks: this.state.tasks.filter( task => task.id !== id ) }))
  }

  render() {
    const { pathname } = this.props.location;
    const empty = <div style={{textAlign: 'center', marginTop: '30px'}}><h3>All Clear Here</h3></div>;
    return (
      <div className='col-sm-5 container'>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className={`nav-link ${ pathname === '/' ? 'active' : '' }`} to='/'>Today</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${ pathname === '/backlog' ? 'active' : '' }`} to='/backlog'>Backlog</Link>
          </li>
        </ul>
        <ul className="list-group">
          { this.state.tasks.length === 0 ? empty : '' }
          {this.state.tasks.map( task =>  {
            return (
              <Task 
                completeTask={this.completeTask}
                handleSelectTask={this.onSelectTask} 
                selectedTask={this.state.selectedTask}
                key={task.id} 
                task={task} 
                deleteTask={this.deleteTask}
              />
            )
          })} 
        </ul>
      </div>
    );
  }
};

export default TaskList;
