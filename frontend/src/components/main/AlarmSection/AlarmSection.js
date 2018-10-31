import React from 'react';
import classNames from 'classnames/bind';
import styles from './AlarmSection.scss';
import AlarmListContainer from 'containers/main/AlarmListContainer';

const cx = classNames.bind(styles);

const AlarmSection = ({onClick, open, alarms}) => (
  <div className={cx('alarmSection-wrapper')}>
    <div className={cx('alarmSection-title')} onClick={onClick}>
      만료된 일정 <span style={{fontSize:'1.0rem', color: 'red'}}>[click]</span>
    </div>
    {
      open &&
      (
        <AlarmListContainer
          alarms={alarms}
        />
      )
    }
  </div>
)

export default AlarmSection;
