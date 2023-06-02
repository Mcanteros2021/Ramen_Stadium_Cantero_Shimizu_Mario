import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NavBar from './components/NavBar/NavBar';
import Copyright from "./components/Copyright/Copyright";
import About_us from "./pages/about_us/About_us";
import History from "./pages/history/History";
import Welcome from "./components/Welcome/welcome";
import Tab from "./components/Tab/Tab";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className>
            <BrowserRouter>
                <NavBar isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />
                {isLoggedIn && <Welcome />}
                {isLoggedIn && <Tab />}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sobre_nosotros" element={<About_us />} />
                    <Route path="/historia_ramen" element={<History />} />
                </Routes>
            </BrowserRouter>
            <Copyright />
        </div>
    );
};

export default App;
