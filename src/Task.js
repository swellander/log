import React from 'react';
import TaskDetail from './TaskDetail';
import axios from 'axios';

class Task extends React.Component {
  constructor(props) {
    super();
    const { task } = props;
    this.state = {
      duration: task.duration,
      complete: task.complete
    }
    const methodNames = ['handleComplete', 'start', 'stop'];
    methodNames.forEach(name => this[name] = this[name].bind(this));
  }

  start() {
    this.timer = setInterval(() => {
      this.setState(prevState => {
        return { duration: prevState.duration + 1 }
      });
      const duration = this.state.duration;
      axios.put(`/tasks/${this.props.task.id}`, {duration, complete: false}) 
    }, 1000)
  }

  stop() {
    clearInterval(this.timer);
  }

  handleComplete (id, duration) {
    this.stop();
    this.setState({ complete: true });
    this.props.completeTask(id, duration);
  }

  render() {
    const { selectedTask, task, handleSelectTask, completeTask } = this.props;
    const isSelected = selectedTask.id === task.id;
    const status = isSelected ? 'active' : '';
    const completeClass = this.state.complete ? 'text-success' : '';

    return (
      <div>
        <li onClick={() => handleSelectTask(task.id)} className={`list-group-item ${status}`}>
          <span className={completeClass}>{ task.name }</span> 
        </li>  
        { isSelected ? 
            <TaskDetail 
              duration={this.state.duration}
              task={task} 
              start={this.start}
              stop={this.stop}
              completeTask={this.handleComplete}
              complete={this.state.complete}
            /> : '' }
      </div>
    )
  } 
}

export default Task;
