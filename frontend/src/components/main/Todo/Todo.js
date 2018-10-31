import React from 'react';
import classNames from 'classnames/bind';
import styles from './Todo.scss';
import Button from 'components/common/Button'
const cx = classNames.bind(styles);

const calcOutdate =(date) => {
  const basicTime = new Date();
  basicTime.setHours(0);
  basicTime.setMinutes(0);
  basicTime.setSeconds(0);

  return new Date(date).getTime() < basicTime.getTime();
}

const Todo = ({
  _id,
  title, 
  content, 
  priority, 
  date, 
  onChange, 
  onDelete
}) => {
  const outdate = calcOutdate(date);
  let priorityClass;
  if(priority === '1'){
    priorityClass='priority-first';
  }else if(priority === '2'){
    priorityClass='priority-second';
  }else if(priority === '3'){
    priorityClass='priority-third';
  }
  return (
  <div className={cx('todo-wrapper', {'todo-outdate': outdate})}>
    {/* 상단 정보 */}
    <div className={cx('todo-infoContainer')}>
      <div className={cx('todo-delete')}>
        <Button onClick={() => {onDelete(_id)}}>
          <span className={cx('todo-buttonSize')}>X</span>
        </Button>
      </div>
      <div className={cx('todo-modify')}>
        <Button onClick={() => {onChange({_id,title,content,priority, date})}}>
          <span className={cx('todo-buttonSize')}>수정</span>
        </Button>
      </div>
      <div className={cx('todo-priority', {[priorityClass]:true})}>
        {priority}
      </div>
      <div className={cx('todo-date')}>
        {date}
      </div>
      <div className={cx('todo-title')}>
        {title} &nbsp;
        {
        outdate &&
          <span style={{color:'red',fontSize:'0.9rem',fontWeight:'normal'}}>
            [outdated]
          </span>
        }
      </div>
    </div>
    <div className={cx('todo-content')}>
      {content}
    </div>
  </div>
)}

export default Todo;
