import React from 'react';
import axios from 'axios';
//import Graph from './Graph'
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';
import Calendar from './Calendar'
import { Switch, Route } from 'react-router-dom';


const Body = () => {
  const divStyle = {
    height: '100vh',
    width: '100vw',
    marginTop: '20px'
  } 

  return (
    <div className="row container" style={ divStyle }>
      <Switch>
        {/* added keys to <Route/> to be able to prompt component re-render (https://stackoverflow.com/questions/47804798/how-to-re-render-the-same-component-being-used-in-different-routes) */}
        <Route key={2} exact path='/' component={TaskList} />
        <Route key={1} path='/backlog' component={TaskList} />
        <Route path='/new' component={NewTaskForm} />
        <Route path='/calendar' component={Calendar} />
      </Switch>
    </div>
  )
}

export default Body;
