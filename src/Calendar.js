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
    let daysPerWk = 7
    let totalDays = 31
    let monthTable = []
    let wk = []
    while(totalDays >= 0) {
      if(daysPerWk === 0 || totalDays === 0){
        monthTable.push(wk)
        wk = []
        daysPerWk = 7
      }
      wk.push('')
      daysPerWk--
      totalDays--
    }
    totalDays = 31

    return (
      <div className="offset-4 col-md-6">
        {monthTable.map(wk=>{

        })}
      </div>
    )
  }
}
