import React, {Component} from 'react';
import classNames from 'classnames/bind';
import styles from './TodoList.scss';
import Todo from 'components/main/Todo';

const cx = classNames.bind(styles);

class TodoList extends Component{
  shouldComponentUpdate(nextProps, nextState){
    return this.props !== nextProps;
  }
  render(){
    const {todos, onChange, onDelete} = this.props;
    return(
      <div className={cx('todoList-wrapper')}>
        <div className={cx('todoList-padding')}>
          {todos && todos.map(({title, content, priority, date, _id}, index) => (
            <Todo 
              title = {title}
              content = {content}
              priority = {priority}
              date = {date}
              key = {index}
              _id={_id}
              onChange={onChange}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default TodoList;
