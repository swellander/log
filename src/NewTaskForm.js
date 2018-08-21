import React from 'react';
import axios from 'axios';

class NewTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      notes: '',
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
    let task = {
      name: this.state.name,
      notes: this.state.notes,
      tags: this.state.tags
    }

    const { data } = await axios.post('/tasks', task);
    this.props.addTask(data);
      //clear inputs
    this.setState({ name: '', tags: '', notes: '' })

    //update task list
  }

  render() {
    return (
      <div className="col-sm-3 container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className="form-control" placeholder="name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <textarea className="form-control" placeholder="notes" rows="5" name="notes" value={this.state.notes} onChange={this.handleChange}></textarea>
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="tags"name="tags" type="text" value={this.state.tags} onChange={this.handleChange} />
          </div>
          <input type="submit" className="btn btn-primary" value="Add"/>
        </form> 
      </div>
    )
  }
}

export default NewTaskForm;
