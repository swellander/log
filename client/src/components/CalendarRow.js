import React from 'react'
import CalendarDay from './CalendarDay'

export default function({wk, colIdx}){
	return (
	  <tr>
        {wk.map((day, i)=>{
            return(
              <CalendarDay day={day} dayIdx={i} key={i} colIdx={colIdx}/>
            )
        })}
      </tr>
	)
}