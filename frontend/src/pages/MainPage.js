import React from 'react';

import MainTemplate  from 'components/main/MainTemplate';
import ControlLineContainer from 'containers/main/ControlLineContainer';
import TodoListContainer from '../containers/main/TodoListContainer';
import AlarmSectionContainer from 'containers/main/AlarmSectionContainer';
import EditorModalContainer from 'containers/main/EditorModalContainer';

const MainPage = () => {
  return(
    <MainTemplate
      controlLine = {<ControlLineContainer />}
      todoList = {<TodoListContainer />}
      alarmSection = {<AlarmSectionContainer />}
      editorModal = {<EditorModalContainer />}
    />
  );
};

export default MainPage;