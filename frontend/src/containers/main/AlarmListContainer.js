import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AlarmList from 'components/main/AlarmList';
import * as todoActions from 'store/modules/todo';

class AlarmListContainer extends Component{
  handleDelete = (_id) => {
    const {TodoActions} = this.props;
    TodoActions.deleteTodo(_id);
  }
  render(){
    const {alarms} = this.props;
    const {handleDelete} = this;

    return(
      <AlarmList 
        alarms={alarms}
        onDelete={handleDelete}
      />
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    TodoActions: bindActionCreators(todoActions, dispatch),
  })
)(AlarmListContainer);