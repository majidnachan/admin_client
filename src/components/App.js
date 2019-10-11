import React from 'react';
import '../css/App.css';
//app flex-row align-items-center
import Container from './Container';
import Login from './Login';


function App () {
  
  const isLoggedIn = 1;
  if (isLoggedIn) {
    return <Container />;
  }else{
    return <Login />;  
  }
  
}

export default App;
