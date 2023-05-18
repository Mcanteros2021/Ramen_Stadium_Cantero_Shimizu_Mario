import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NavBar from './components/NavBar/NavBar';
import Copyright from "./components/Copyright/Copyright";
import About_us from "./pages/about_us/About_us";
import History from "./pages/history/History";


const App = () => {
  return (
    <div className>
      <BrowserRouter >
        <NavBar></NavBar>
        <Routes>
           <Route path="/" element={<HomePage/>} />
           <Route path="/sobre_nosotros" element={<About_us/>}></Route>
           <Route path="/historia_ramen" element={<History/>}></Route>
        </Routes>
      </BrowserRouter>
        <Copyright></Copyright>
    </div>

  );
};

export default App;
