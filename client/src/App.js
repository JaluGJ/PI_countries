import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Pages/LadingP/Landing';
// import NavBar from './Pages/NavBar/NavBar';
import Home from './Pages/Home/Home';
//import Country from '/Components/'

function App() {
  return (
    <>
      <Route exact path='/' component={Landing} />
      <Route path='/home' component={Home} />
      {/* <Route path='/country' component = {Country}/> */}
    </>
  );
}

export default App;
