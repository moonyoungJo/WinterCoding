import React from 'react';
import classNames from 'classnames/bind';
import styles from './MainTemplate.scss';

const cx = classNames.bind(styles);

const MainTemplate = ({controlLine, todoList, alarmSection, editorModal}) => (
  <div>
    <div className={cx('main-background')}></div>
    <div className={cx('main-content-wrapper')}>
      <div className={cx('main-title')}>
        <div className={cx('main-word')}>
          WINTER CODING
        </div>
        <div className={cx('sub-word')}>
          todo - list
        </div>
        <div className={cx('writer-word')}>
          [ 조문영 ]
        </div>
      </div>
      <div className={cx('main-content')}>
        {controlLine}
        {todoList}
      </div>
    </div>
    {alarmSection}
    {editorModal}
  </div>
);

export default MainTemplate;