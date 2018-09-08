import React, { Component, Fragment } from 'react'

export default function({day, dayIdx, colIdx}){
  dayIdx = (dayIdx+1)+(7*(colIdx-1))
  return (
  	<Fragment>
      {colIdx===0 ? 
        <td style= {{ border: '1px solid black',
                      padding: '5px 60px 5px 60px'}}>{day}</td> :
        <td style= {{ border: '1px solid black',
                      padding:'50px 60px 50px 60px'}}>
                      <nav style={{float: 'right'}}>{dayIdx}</nav>
                      </td>}
    </Fragment>
  )
}