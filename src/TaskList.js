import React from 'react';
import Task from './Task';
import axios from 'axios';
import moment from 'moment';

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
    axios.put('/tasks/' + id, {duration, complete: true})
      .then( response => console.log(response.data))
      .catch(err => console.log(err));
  }

  render() {
    const { tasks } = this.props;
    return (
      <div className='offset-sm-1 col-sm-4'>
        <h3>{ moment().format('dddd, MMMM Do') }</h3>
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

export default TaskList;
