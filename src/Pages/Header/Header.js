import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);

    };


    const menuItems = <>
        <li className=' font-semibold'><Link to="/">Home</Link></li>
        <li className=' font-semibold'><Link to="/tools">Tools</Link></li>
        <li className=' font-semibold'><Link to="/review">Review</Link></li>
        {user && <li className=' font-semibold'><Link to="/dashboard">DashBoard</Link></li>}
        <li className=' font-semibold'><Link to="/blog">Blog</Link></li>
        <li className=' font-semibold'><Link to="/contact">Contact</Link></li>

        <li className=' font-semibold'>
            {user ? <button className='btn btn-accent text-white' onClick={logout}>Sign Out</button>
                : <Link to="/login">Login</Link>

            }
        </li>

    </>
    return (
        <div className="navbar  bg-secondary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost text-accent lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <ul className="p-2">
                            {menuItems}
                        </ul>

                    </ul>
                </div>
                <a className="btn btn-ghost  normal-case text-2xl font-semibold ">PC World</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-end    lg:hidden">
                <label tabIndex="1" htmlFor="dashboard-slide-bar" className="btn btn-ghost text-accent ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>

        </div>
    );
};


export default Header;