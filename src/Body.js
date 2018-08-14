import React from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';


class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
    this.start = this.start.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  async componentDidMount() {
    const response = await axios.get('/api/tasks/today'); 
    this.setState({ tasks: response.data });
  }

  addTask(task) {
    this.setState( prevState => ({
      tasks: [...prevState.tasks, task]
    }));
  }

  start() {
    const { selectedTask } = this.state;
    const newInterval = Object.assign({}, selectedTask);
    newInterval.timer = setInterval(() => {
      const newSelectedTask = Object.assign({}, this.state.selectedTask);
      newSelectedTask.duration ++;
      this.setState({ selectedTask: newSelectedTask })
    }, 1000);

    this.setState({ selectedTask: newInterval });
  }

  stop() {
    alert('stop')
  }

  render() {
    const divStyle = {
      height: '100vh',
      width: '100vw'
    } 
    return (
      <div style={ divStyle }>
        <TaskList tasks={this.state.tasks}/> 
        <NewTaskForm addTask={this.addTask}/>
      </div>
    )
  }
}

export default Body;
