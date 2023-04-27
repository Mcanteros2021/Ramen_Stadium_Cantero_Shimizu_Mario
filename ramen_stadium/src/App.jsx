import React from 'react';
import { BrowserRouter, Switch, Route, Routes  } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
};

export default App;
