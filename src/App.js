import React from 'react';

import Header from './containers/Header/Header';
import TopNav from './containers/TopNav/TopNav';
import Main from './containers/Main/Main';

const App = () => (
  <div className="container-fluid">
    <Header />
    <TopNav />
    <Main />
  </div>
);


export default App;
