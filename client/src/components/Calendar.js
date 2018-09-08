import React, {Component, Fragment} from 'react';

export default class Calendar extends Component {
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
    function daysInThisMonth() {
      var now = new Date();
      return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    }
    let totalDays = daysInThisMonth()
    let count = 1;
    console.log(totalDays)
    let totalRows = 5
    let monthTable = [['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']]
    while(totalRows > 0) {
      monthTable.push(Array(7).fill(count.toString()))
      if (count<=totalDays) {count++}
      else {count = ''}
      totalRows--
    }
    

    return (
      <div className="offset-1 col-md-1">
        {monthTable.map((wk,colIdx)=>{
          return(
            <tr>
            {wk.map(day=>{
                return(
                <Fragment>
                  {colIdx===0 ? 
                    <td style= {{ border: '1px solid black',
                                  padding: '5px 60px 5px 60px'}}>{day}</td> :
                    <td style= {{ border: '1px solid black',
                                  padding:'50px 60px 50px 60px'}}>
                                  <a style={{float: 'right'}}>{count}</a>
                                  </td>}
                </Fragment>
                  )
            })}
          </tr>
          )
        })}
      </div>
    )
  }
}
