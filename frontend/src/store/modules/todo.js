import {createAction, handleActions} from 'redux-actions';
import {Map, List, fromJS} from 'immutable';
import {pender} from 'redux-pender';
import * as api from 'lib/api';

//action types
const GET_TODO_LIST = 'todo/GET_TODO_LIST';
const WRITE_TODO = 'todo/WIRTE_TODO';
const DELETE_TODO = 'todo/DELETE_TODO';
const UPDATE_TODO = 'todo/UPDATE_TODO';
const SORT = 'todo/SORT';

export const getTodoList = createAction(GET_TODO_LIST, api.getTodoList);
export const writeTodo = createAction(WRITE_TODO, api.writeTodo);
export const deleteTodo = createAction(DELETE_TODO, api.deleteTodo);
export const updateTodo = createAction(UPDATE_TODO, api.updateTodo);
export const sort = createAction(SORT);

//initial state
const initialState = Map({
  todos: List(),
  sortTarget: 'priority',
  outdatedTodos: List()
});

//util function
const sortState = (state, sortTarget) => {
    let todos = state.get('todos');

    if(sortTarget === 'priority'){
      todos = todos.sort((todo1, todo2) => {
        const priorityResult = todo1.get('priority') - todo2.get('priority');
        if(priorityResult === 0){
          return new Date(todo1.get('date')).getTime() - new Date(todo2.get('date')).getTime();
        }
        return priorityResult;
      })
    }else if(sortTarget === 'date'){
      todos = todos.sort((todo1, todo2) => {
        const dateResult = new Date(todo1.get('date')).getTime() - new Date(todo2.get('date')).getTime();
        if(dateResult === 0){
          return todo1.get('priority') - todo2.get('priority')
        }
        return dateResult;
      })
    }

    return state.set('todos', todos);
}
const setOutdatedTodos = (state) => {
  const basicTime = new Date();
  basicTime.setHours(0);
  basicTime.setMinutes(0);
  basicTime.setSeconds(0);

  const outdatedTodos = state.get('todos').filter((todo) => {
    return basicTime.getTime() > new Date(todo.get('date')).getTime();
  })

  return state.set('outdatedTodos', outdatedTodos);
}

export default handleActions({
  ...pender({
    type: GET_TODO_LIST,
    onSuccess: (state, action) => {
      let newState = state.set('todos', fromJS(action.payload.data));   
      newState = setOutdatedTodos(newState);     
      newState = sortState(newState, state.get('sortTarget'));
      return newState;
    }
  }),
  ...pender({
    type: WRITE_TODO,
    onSuccess: (state, action) => {
      let newState = state.set('todos', fromJS(action.payload.data));  
      newState = setOutdatedTodos(newState);      
      newState = sortState(newState, state.get('sortTarget'));
      return newState;
    }
  }),
  ...pender({
    type: DELETE_TODO,
    onSuccess: (state, action) => {
      let newState = state.set('todos', fromJS(action.payload.data));  
      newState = setOutdatedTodos(newState);      
      newState = sortState(newState, state.get('sortTarget'));
      return newState;
    }
  }),
  ...pender({
    type: UPDATE_TODO,
    onSuccess: (state, action) => {
      let newState = state.set('todos', fromJS(action.payload.data));    
      newState = setOutdatedTodos(newState);    
      newState = sortState(newState, state.get('sortTarget'));
      return newState;
    }
  }),
  [SORT]: (state, action) => {
    const sortTarget = action.payload;
    let result = sortState(state, sortTarget);
    return result.set('sortTarget', sortTarget);
  }
}, initialState);