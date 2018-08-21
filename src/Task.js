import React from 'react';
import TaskDetail from './TaskDetail';
import axios from 'axios';
import { css } from 'react-emotion';
import { BeatLoader } from 'react-spinners';

class Task extends React.Component {
  constructor(props) {
    super();
    const { task } = props;
    this.state = {
      duration: task.duration,
      complete: task.complete,
      inProgress: task.inProgress
    }
    const methodNames = ['handleComplete', 'start', 'stop'];
    methodNames.forEach(name => this[name] = this[name].bind(this));
  }

  componentDidMount() {
    if (this.state.inProgress) this.start();
  }

  componentWillUnmount() {
    this.stop();
  }

  start() {
    //this is redundant
    this.setState({ inProgress: true })
    
    this.timer = setInterval(() => {
      this.setState(prevState => {
        return { duration: prevState.duration + 1 }
      });
      const duration = this.state.duration;
      axios.put(`/tasks/${this.props.task.id}`, {duration, complete: false, inProgress: true}) // repeatedly setting complete and inProgress is redundant
    }, 1000)
  }

  stop() {
    this.setState({ inProgress: false })
    clearInterval(this.timer);
    axios.put(`/tasks/${this.props.task.id}`, { inProgress: false });
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

    const override = css`
      display: inline-block;
      margin: 0 auto;
      border-color: red;
    `;

    //if before page refresh task was in progress, resume timer
    const styles = {
        cursor: 'pointer'
    };

    return (
      <div>
        <li style={styles} onClick={() => handleSelectTask(task.id)} className={`list-group-item ${status}`}>
          <span className={completeClass}>{ task.name }</span> 
          { this.state.inProgress ? <div className="float-right"><BeatLoader 
            className={override}
            sizeUnit={"px"}
            size={10}
            color={'#123abc'}
          /></div>  : ''}
        
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
