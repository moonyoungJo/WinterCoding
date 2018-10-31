import React, {Component} from 'react';
import classNames from 'classnames/bind';
import styles from './AlarmList.scss';
import Alarm from 'components/main/Alarm';

const cx = classNames.bind(styles);

class AlarmList extends Component{
  shouldComponentUpdate(nextProps, nextState){
    return this.props !== nextProps;
  }
  render() {
    const {alarms, onDelete} = this.props;

    return(
      <div className={cx('alarmList-wrapper')}>
        {
          alarms.map(({title, date, priority, _id}, index) => (
            <Alarm 
              title={title}
              date={date}
              priority={priority}
              _id={_id}
              key={index}
              onDelete={onDelete}
            />
          ))
        }
      </div>
    )
  }
}

export default AlarmList;