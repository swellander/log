import React from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';
import NewTaskForm from './NewTaskForm';



class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      selectedTask: {}
    }
    this.completeTask = this.completeTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.onSelectTask = this.onSelectTask.bind(this);
  }

  async componentDidMount() {
    const response = await axios.get('/api/tasks/today'); 
    this.setState({ tasks: response.data });
    console.log(response.data);
  }

  async onSelectTask(id) {
    if(this.state.selectedTask.id === id) {
      this.setState({ selectedTask: {} });
      return;
    }
    const response = await axios.get('/api/tasks/' + id);
    this.setState({ selectedTask: response.data });
  }

  addTask(task) {
    this.setState( prevState => ({
      tasks: [...prevState.tasks, task]
    }));
  }

  completeTask(id, duration) {
    axios.put('/tasks/' + id, {duration})
      .then( response => console.log(response.data))
      .catch(err => console.log(err));
  }

  render() {
    const divStyle = {
      height: '100vh',
      width: '100vw'
    }


    return (
      <div style={ divStyle } className="row">
        <TaskList 
          tasks={this.state.tasks} 
          selectedTask={this.state.selectedTask}
          handleSelectTask={this.onSelectTask}
        />
        { this.state.selectedTask.id ? <TaskDetail completeTask={this.completeTask} task={this.state.selectedTask}/> : '' }
        <NewTaskForm addTask={this.addTask}/>
      </div>
    )
  }
}

export default Body;
