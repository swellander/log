import React from 'react';
import TaskDetail from './TaskDetail';

class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      duration: 0
    }
    const methodNames = ['start', 'stop'];
    methodNames.forEach(name => this[name] = this[name].bind(this));
  }

  start() {
    this.timer = setInterval(() => {
      this.setState(prevState => {
        return { duration: prevState.duration + 1 }
      })
    }, 1000)
  }

  stop() {
    clearInterval(this.timer);
  }

  render() {
    const { selectedTask, task, handleSelectTask, completeTask } = this.props;
    const isSelected = selectedTask.id === task.id;
    const status = isSelected ? 'active' : '';
    return (
      <div>
        <li onClick={() => handleSelectTask(task.id)} className={`list-group-item ${status}`}>
          { task.name } 
        </li>  
        { isSelected ? 
            <TaskDetail 
              duration={this.state.duration}
              task={task} 
              start={this.start}
              stop={this.stop}
              completeTask={completeTask}
            /> : '' }
      </div>
    )
  } 
}

export default Task;
