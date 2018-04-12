import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import EditDailyData from './components/editDailyData';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/add" component= {EditDailyData} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
