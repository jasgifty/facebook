import React from 'react';
import './App.css';
import Sidebar from'./Sidebar'
import Header from'./Header';
import Feed from './Feed';
import Widgets from'./Widgets';
import Login from './Login';
import { useStateValue } from './stateProvider';

function App() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className="app">
      {!user?(
        <Login/>
      ):(
        <>
        <Header />
          <div className='app__body'>
            <Sidebar/>
            <Feed/>
            <Widgets/>
          </div>
          </>
      )}
        
    </div>
  );
}

export default App;
