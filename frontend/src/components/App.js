import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {MainPage} from 'pages';

const App = () =>{
  return (
    // 필요한 페이지는 여기에 추가
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  )
}

export default App;
