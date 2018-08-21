import React from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';
import { Switch, Route } from 'react-router-dom';


class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      allTasks: [],
      todayTasks: []
    }
    this.start = this.start.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  async componentDidMount() {
    const response = await axios.get('/api/tasks/today'); 
    const todayTasks = response.data.filter( task => new Date(task.updatedAt) > new Date().setHours(0,0,0,0));
    this.setState({ allTasks: response.data, todayTasks });
  }

  addTask(task) {
    this.setState( prevState => ({
      allTasks: [...prevState.allTasks, task]
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

  handleClick() {
   
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
          <Route exact path='/' render={ (props) => <TaskList tasks={this.state.allTasks}/> } />
          <Route exact path='/backlog' render={ (props) => <TaskList tasks={this.state.todayTasks}/> } />
          <Route path='/new' render={ (props) => <NewTaskForm addTask={this.addTask}/> } />
        </Switch>
      </div>
    )
  }
}

export default Body;
