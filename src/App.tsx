import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InfoPage from './components/InfoPage';
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/infopage' element={<InfoPage/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
