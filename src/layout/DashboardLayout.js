import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Sidebar from '../pages/Shared/Sidebar/Sidebar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 lg:bg-inherit bg-base-100 text-base-content">

                        {/* <li><Sidebar to="/dashboard">Booking</Sidebar></li> */}
                        <li><Sidebar to="/dashboard">Booking List</Sidebar></li>
                        <li><Sidebar to="/dashboard/review">Review</Sidebar></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;