import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="outlet my-3 container mx-auto">
            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;