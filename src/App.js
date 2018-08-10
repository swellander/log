import React from 'react';
import TaskList from './TaskList';
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [] 
    }
  }

  async componentDidMount() {
    const response = await axios.get('/api/tasks'); 
    this.setState({ tasks: response.data });
  }

  render() {
    return (
      <div className="container">
        <TaskList tasks={this.state.tasks} />
      </div>
    )
  }
};

export default App;
