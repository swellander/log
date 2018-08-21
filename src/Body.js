import React from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';
import AllTasks from './AllTasks';
import { Switch, Route } from 'react-router-dom';


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
      width: '100vw',
      marginTop: '20px'
    } 
    return (
      <div className="row container" style={ divStyle }>
        <Switch>
          <Route exact path='/' render={ (props) => <TaskList tasks={this.state.tasks}/> } />
          <Route path='/new' render={ (props) => <NewTaskForm addTask={this.addTask}/> } />
          <Route path='/backlog' component={AllTasks} />
        </Switch>
      </div>
    )
  }
}

export default Body;
