import React, { useState } from 'react';
import './Tab.scss';

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
                Crear Platos
            </div>
            <div
                className={`tab-item ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => handleTabClick(1)}
            >
                Mis Platos
            </div>
            <div
                className={`tab-item ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => handleTabClick(2)}
            >
                Antes de Empezar
            </div>
            <div
                className={`tab-item ${activeTab === 3 ? 'active' : ''}`}
                onClick={() => handleTabClick(3)}
            >
                Mi Cuenta
            </div>
        </div>
    );
};

export default Tab;
