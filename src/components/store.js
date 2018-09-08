import { createStore } from 'redux';

const initialState = {
  selectedTask: {},
  tasks: []
};

export const newLoadAction = tasks => ({ type: 'LOAD_TASKS', tasks });

const reducer = (state = initialState, action) => {
  console.log(state);
  switch(action.type) {
    case 'LOAD_TASKS': 
      return {...state, tasks: action.tasks} 
    default:
      return state;
  }
}

export default createStore(reducer);

