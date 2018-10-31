import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ControlLine from 'components/main/ControlLine';
import * as todoActions from 'store/modules/todo';
import * as editorActions from 'store/modules/editor';

class ControlLineContainer extends Component{
  handleChangeSort = (e) => {
    const {TodoActions} = this.props;
    TodoActions.sort(e.target.value);
  }
  handleAddTodo = () => {
    const {EditorActions} = this.props;
    EditorActions.toggleEditor();
  }
  render(){
    const {handleChangeSort, handleAddTodo} = this;
    const {sortTarget} = this.props;

    return(
      <ControlLine 
        onAddTodo = {handleAddTodo}
        onChangeSort={handleChangeSort}
        sortTarget={sortTarget}
      />
    )
  }
}

export default connect(
  (state) => ({
    sortTarget: state.todo.get('sortTarget')
  }),
  (dispatch) => ({
    TodoActions: bindActionCreators(todoActions, dispatch),
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(ControlLineContainer);