import React from 'react';
import classNames from 'classnames/bind';
import styles from './ControlLine.scss';

import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const ControlLine = ({
  onAddTodo, 
  onChangeSort, 
  sortTarget
}) => (
  <div className={cx('controlLine-wrapper')}>
    <div className={cx('controlLine-addTodo')} onClick={onAddTodo}>
      <Button>일정 추가하기</Button>
    </div>
    <div className={cx('controlLine-sortSelect')}>
      sort : 
      우선순위 
      <input 
        type='radio' 
        name='sort' 
        value='priority' 
        onChange={onChangeSort}
        checked = {'priority'===sortTarget}
      />&nbsp;&nbsp;
      마감일 
      <input 
        type='radio' 
        name='sort' 
        value='date'
        onChange={onChangeSort}
        checked = {'date'===sortTarget}
      />
    </div>
  </div>
)

export default ControlLine;