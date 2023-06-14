import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import HomePage from './pages/home/HomePage';
import NavBar from './components/NavBar/NavBar';
import Copyright from "./components/Copyright/Copyright";
import About_us from "./pages/about_us/About_us";
import History from "./pages/history/History";
import Welcome from "./components/Welcome/welcome";
import Tab from "./components/Tab/Tab";
import Plates_creation from "./pages/Plates_creation/Plates_creation";
import Panel_admin from "./pages/My_account/Panel_admin";
import Before_starting from "./pages/Before_starting/Before_starting";
import My_plates from "./pages/My_plates/My_plates";
import TutorialIndex from "./pages/Tutorial_index/tutorial_index";
import { PartsContext } from './context/PartsContext';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [parts, setParts] = useState([]);

    return (
        <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
            <PartsContext.Provider value={{ parts, setParts }}>
            <div className>
                <BrowserRouter>
                    <NavBar />
                    {isLoggedIn && <Welcome />}
                    {isLoggedIn && <Tab />}
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/sobre_nosotros" element={<About_us />} />
                        <Route path="/historia_ramen" element={<History />} />
                        <Route path="/creador_de_platos" element={<Plates_creation />} />
                        <Route path="/panel_admin" element={<Panel_admin />} />
                        <Route path="/antes_de_empezar" element={<Before_starting />} />
                        <Route path="/mis_platos" element={<My_plates/>} />
                        <Route path="/tutorial" element={<TutorialIndex/>}></Route>
                    </Routes>
                </BrowserRouter>
                <Copyright />
            </div>
                </PartsContext.Provider>
        </UserContext.Provider >
    );
};

export default App;
