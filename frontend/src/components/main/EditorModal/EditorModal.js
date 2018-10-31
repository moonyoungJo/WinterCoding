import React from 'react';
import classNames from 'classnames/bind';
import styles from './EditorModal.scss';
import Button from 'components/common/Button'

const cx = classNames.bind(styles);

const EditorModal = ({
  visible, 
  onExit, 
  onSubmit, 
  onChange,
  title, 
  priority, 
  date, 
  content,
  message
}) => {
  if(!visible){
    return(
      <div />
    )
  }
  return(
  <div>
    <div className={cx('editorModal-background')} />
    <div className={cx('editorModal-wrapper')}>
      <div className={cx('editorModal-topLine')}>
        <h2>
          Todo
        </h2>
        <div className={cx('editorModal-exit')}>
          <Button onClick={onExit}><span style={{margin:'0 0.2rem'}}>X</span></Button>
        </div>
      </div>
      <div className={cx('editorModal-content')}>
        <input 
          className={cx('editorModal-title')}
          type='text' 
          placeholder='title' 
          name='title'
          value={title} 
          onChange={onChange}
          autoFocus 
        /><br />

        마감기한 <input 
          className={cx('editorModal-date')}
          type='date' 
          name='date'
          value={date} 
          onChange={onChange}
        />
        우선순위  &nbsp;&nbsp;&nbsp;
        1 <input type='radio' name='priority' value='1' checked={priority === '1'} onChange={onChange} />
        2 <input type='radio' name='priority' value='2' checked={priority === '2'} onChange={onChange} />
        3 <input type='radio' name='priority' value='3' checked={priority === '3'} onChange={onChange} />

        <textarea 
          value={content}
          name='content'
          onChange={onChange}
        />
        <div>
          {
            message &&
            (<span style={{color:'red'}}>{message}</span>)
          }
        </div>
        <Button onClick={onSubmit}>
          <span className={cx('editorModal-submit')}>Submit</span>
        </Button>
      </div>
    </div>
  </div>
)}

export default EditorModal;