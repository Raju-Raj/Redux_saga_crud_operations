import React from 'react'
import './App.css';
import MobileDetails from './component/MobileDetails';

function App() {
  return (
    <div className="App">
      <div className='header-app' style={{marginTop:200}}>
      <h1>Redux-Saga Crash Course</h1>
      <MobileDetails/>
      </div>
    </div>
  );
}

export default App;
