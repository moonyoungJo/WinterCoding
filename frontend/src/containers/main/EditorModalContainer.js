import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import EditorModal from 'components/main/EditorModal';
import * as todoActions from 'store/modules/todo';
import * as editorActions from 'store/modules/editor';

class EditorModalContainer extends Component{
  state = {
    message:''
  }
  handleChange = (e) => {
    const {EditorActions} = this.props;
    EditorActions.changeEditor({
      name: e.target.name,
      value: e.target.value
    });
  }
  handleExit = () => {
    const {EditorActions} = this.props;
    EditorActions.toggleEditor();
    this.setState({
      message: ''
    });
  }
  handleSubmit = () => {
    const {
      TodoActions, 
      title, 
      priority, 
      date, 
      content, 
      _id
    } = this.props;
    
    if(title === ''){
      this.setState({
        message: '타이틀을 채워주세요'
      });
      return;
    }else if(content === ''){
      this.setState({
        message: '콘텐츠를 채워주세요'
      });
      return;
    }
    
    if(_id === '')
    TodoActions.writeTodo({title, priority, date, content});
    else
      TodoActions.updateTodo({_id, title, priority, date, content});
    this.handleExit();
    this.setState({
      message: ''
    });
  }
  render() {
    const {visible, title, priority, date, content} = this.props;
    const {handleChange, handleExit, handleSubmit} = this;
    const {message} = this.state;
    return(
      <EditorModal 
        visible={visible}
        onExit={handleExit}
        onSubmit={handleSubmit}
        onChange={handleChange}
        title={title}
        priority={priority}
        date={date}
        content={content}
        message={message}
      />
    )
  }
}

export default connect(
  (state) => ({
    visible: state.editor.get('show'),
    title: state.editor.get('title'),
    priority: state.editor.get('priority'),
    date: state.editor.get('date'),
    content: state.editor.get('content'),
    _id: state.editor.get('_id')
  }),
  (dispatch) => ({
    TodoActions: bindActionCreators(todoActions, dispatch),
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(EditorModalContainer);