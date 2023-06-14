import React, { useContext, useState } from 'react';
import './Tab.scss';
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Tab = () => {
    const { user } = useContext(UserContext); // Obtén el usuario del contexto
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className="tab-bar mb-5">
            <div
                className={`tab-item ${activeTab === 0 ? 'active' : ''}`}
                onClick={() => handleTabClick(0)}
            >
                <NavLink className="text-decoration-none link-dark text-center" to="/creador_de_platos">Crear platos</NavLink>
            </div>
            <div
                className={`tab-item ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => handleTabClick(1)}
            >
                <NavLink className="text-decoration-none link-dark text-center" to="/mis_platos">Mis Platos</NavLink>
            </div>
            <div
                className={`tab-item ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => handleTabClick(2)}
            >
                <NavLink className="text-decoration-none link-dark text-center" to="/antes_de_empezar">Antes de empezar</NavLink>
            </div>
            {user && user.role === 'ADMIN' && ( // Verifica si el usuario es admin
                <div
                    className={`tab-item ${activeTab === 3 ? 'active' : ''}`}
                    onClick={() => handleTabClick(3)}
                >
                    <NavLink className="text-decoration-none link-dark text-center" to="/panel_admin">Panel de administrador</NavLink>
                </div>
            )}
        </div>
    );
};

export default Tab;
