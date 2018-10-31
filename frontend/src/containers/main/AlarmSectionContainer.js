import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AlarmSection from 'components/main/AlarmSection';
import * as alarmActions from 'store/modules/alarm';

class AlarmSectionContainer extends Component{
  handleClick = () => {
    const {AlarmActions} = this.props;
    AlarmActions.toggleAlarm();
  }
  render() {
    const {open, alarms} = this.props;
    const {handleClick} = this;
    return(
      <AlarmSection 
        onClick={handleClick}
        open={open}
        alarms={alarms.toJS()}
      />
    )
  }
}

export default connect(
  (state) => ({
    open: state.alarm.get('show'),
    alarms: state.todo.get('outdatedTodos')
  }),
  (dispatch) => ({
    AlarmActions: bindActionCreators(alarmActions, dispatch),
  })
)(AlarmSectionContainer);