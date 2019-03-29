import React from 'react';
import Login from './components/Login';
import ContentPage from './components/ContentPage';
import authorize from './components/authorize';

const Authorize = authorize(Login)(ContentPage);

const App = () => {
  return <Authorize />;
}

export default App;
