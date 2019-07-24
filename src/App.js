import React from 'react';
import './App.css';
import Crud from './components/Crud';
import BarChart from './components/BarChart';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <Crud />
      <br />
      <BarChart />
    </div>
    
  );
}

export default App;
