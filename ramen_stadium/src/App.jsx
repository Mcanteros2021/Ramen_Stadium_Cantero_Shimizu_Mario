import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NavBar from './components/NavBar/NavBar';
import Copyright from "./components/Copyright/Copyright";
import About_us from "./pages/about_us/About_us";
import History from "./pages/history/History";
import Welcome from "./components/Welcome/welcome";
import Tab from "./components/Tab/Tab";
import Plates_creation from "./pages/Plates_creation/Plates_creation";
import My_account from "./pages/My_account/My_account";
import Before_starting from "./pages/Before_starting/Before_starting";
import My_plates from "./pages/My_plates/My_plates";

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
                <Tab />
                {isLoggedIn && <Welcome />}
                {isLoggedIn && <Tab />}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sobre_nosotros" element={<About_us />} />
                    <Route path="/historia_ramen" element={<History />} />
                    <Route path="/creador_de_platos" element={<Plates_creation />} />
                    <Route path="/mi_cuenta" element={<My_account />} />
                    <Route path="/antes_de_empezar" element={<Before_starting />} />
                    <Route path="/mis_platos" element={<My_plates />} />
                </Routes>
            </BrowserRouter>
            <Copyright />
        </div>
    );
};

export default App;
