import React, { useState } from 'react';
import './Tab.scss';
import { NavLink } from "react-router-dom";

const Tab = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className="tab-bar">
            <div
                className={`tab-item ${activeTab === 0 ? 'active' : ''}`}
                onClick={() => handleTabClick(0)}
            >
                <NavLink className="text-decoration-none link-dark" to="/creador_de_platos">Crear platos</NavLink>
            </div>
            <div
                className={`tab-item ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => handleTabClick(1)}
            >
                <NavLink className="text-decoration-none link-dark" to="/mis_platos">Mi Plato</NavLink>
            </div>
            <div
                className={`tab-item ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => handleTabClick(2)}
            >
                <NavLink className="text-decoration-none link-dark" to="/antes_de_empezar">Antes de empezar</NavLink>
            </div>
            <div
                className={`tab-item ${activeTab === 3 ? 'active' : ''}`}
                onClick={() => handleTabClick(3)}
            >
               <NavLink className="text-decoration-none link-dark" to="/mi_cuenta">Mi Cuenta</NavLink>
            </div>
        </div>
    );
};

export default Tab;
