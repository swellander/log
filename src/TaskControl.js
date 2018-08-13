import React from 'react';
import TaskList from './TaskList';
import axios from 'axios';

class TaskControl extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTask: {}
    }
  
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
    axios.put('/tasks/' + id, {duration})
      .then( response => console.log(response.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="row">
        <TaskList 
          tasks={this.props.tasks} 
          selectedTask={this.state.selectedTask}
          handleSelectTask={this.onSelectTask}
        />
      </div>
    )
  }
} 

export default TaskControl;
