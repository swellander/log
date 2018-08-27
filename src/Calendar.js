import React from 'react';



export default class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      done: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    setTimeout(() => this.setState({done: true}), 7000)
  }

  render() {
    return (
      <div className="offset-4 col-md-6">
        <h1>Welcome to Calendaring</h1> 
        <p><em>The dopest Calendar App you never knew you needed.</em></p>
        <p>Click this <button onClick={this.handleClick}>Button</button> and take 7 seconds to imagine what you'd want to see here...</p>
        <br/>
        <br/>
        <br/>
        {this.state.done ? <div className="jumbotron"><h1>Ok!</h1><hr/><p> Now head on over to /src/Calendar.js and start messing around</p></div> : '' }
      </div>
    )
  }
}
