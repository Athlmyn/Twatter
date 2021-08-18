import React from 'react';
import './styles/App.scss';
import { Sidebar } from './components/Sidebar';
import { Widgets } from './components/Widgets';
import { Feed } from './components/Feed';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Feed/>
      <Widgets/>
      
    </div>
  );
}

export default App;
