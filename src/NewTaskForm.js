import React from 'react';
import axios from 'axios';

class NewTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      tags: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value});
  }

  async handleSubmit(event) {
    event.preventDefault();

    const task = {
      name: this.state.name,
      tags: this.state.tags
    }

    const { data } = await axios.post('/tasks', task);
    this.props.addTask(data);

    //clear inputs
    this.setState({ name: '', tags: '' })

    //update task list
  }

  render() {
    return (
      <div className="col-sm-10 container offset-sm-1">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" placeholder="Finish React workshop" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Tags</label>
            <input className="form-control" placeholder="React, Node, Express" name="tags" type="text" value={this.state.tags} onChange={this.handleChange} />
          </div>
          <input type="submit" className="btn btn-primary" value="Add"/>
        </form> 
      </div>
    )
  }
}

export default NewTaskForm;