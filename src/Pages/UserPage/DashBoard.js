import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile bg-accent ">
            <input id="dashboard-slide-bar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mx-10">
                {/* <!-- Page content here --> */}
                <h3 className='text-5xl font-semibold text-secondary mt-10 underline underline-offset-4'>  Dashboard</h3>

                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-slide-bar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/addareview">Add a Reviews</Link></li>
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;