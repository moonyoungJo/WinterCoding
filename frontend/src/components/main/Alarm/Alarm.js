import React from 'react';
import classNames from 'classnames/bind';
import styles from './Alarm.scss';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Alarm = ({title, date, priority, _id, onDelete}) => {
  let priorityClass;
  if(priority === '1'){
    priorityClass='priority-first';
  }else if(priority === '2'){
    priorityClass='priority-second';
  }else if(priority === '3'){
    priorityClass='priority-third';
  }  
  return(
  <div className={cx('alarm-wrapper')}>
    <div className={cx('alarm-title')}>
      {title}
    </div>
    <div className={cx('alarm-delete')}>
      <Button onClick={() => {onDelete(_id)}}><span style={{fontSize:'0.3rem'}}>X</span></Button>
    </div>
    <div className={cx('alarm-priority', {[priorityClass]:true})}>
      {priority}
    </div>
    <div className={cx('alarm-date')}>
      {date}
    </div>
  </div>
)};

export default Alarm;