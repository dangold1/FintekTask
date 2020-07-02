import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import StaffList from './components/StaffList/StaffList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app-content">
        <About />
        <StaffList />
      </div>
    </div>
  );
}

export default App;
