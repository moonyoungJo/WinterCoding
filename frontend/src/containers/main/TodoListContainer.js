import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TodoList from 'components/main/TodoList';
import * as todoActions from 'store/modules/todo';
import * as editorActions from 'store/modules/editor';

class TodoListContainer extends Component{
  handleDelete = (_id) => {
    const {TodoActions} = this.props;
    TodoActions.deleteTodo(_id);
  }
  handleChange = (todo) => {
    const {EditorActions} = this.props;
    EditorActions.modifyEditor(todo);
  }
  componentDidMount(){
    const {TodoActions} = this.props;
    TodoActions.getTodoList();
  }
  render(){
    const {todos} = this.props;
    const {handleDelete, handleChange} = this;
    return(
      <TodoList 
        todos={todos.toJS()}
        onChange={handleChange}
        onDelete={handleDelete}
      />
    )
  }
}

export default connect(
  (state) => ({
    todos: state.todo.get('todos')

  }),
  (dispatch) => ({
    TodoActions: bindActionCreators(todoActions, dispatch),
    EditorActions: bindActionCreators(editorActions, dispatch),
  })
)(TodoListContainer);