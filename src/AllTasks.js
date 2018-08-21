//Maybe should refactor to reuse TaskList component (instead of this non DRY method of a new component)

import React from 'react';
import axios from 'axios';
import Task from './Task';

class AllTasks extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    axios.get('api/tasks')
      .then( ({ data }) => { console.log(data); this.setState({ tasks: data })} )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='col-sm-5 container'>
        <ul className="list-group">
          {this.state.tasks.map( task =>  {
            return (
              <Task 
                key={task.id} 
                task={task} 
              />
            )
          })} 
        </ul>
      </div>
    );
  }
}

export default AllTasks;
