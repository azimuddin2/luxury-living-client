import React, { useContext } from 'react';
import logo from '../../../assets/Image/logo.png';
import { Link } from 'react-router-dom';
import { BiLogInCircle } from 'react-icons/bi';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                toast.error(error.message);
            })
    };

    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link>Contact</Link></li>
        {
            user?.uid && <li className='lg:mr-2 lg:mb-0 mb-2'><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li className='flex lg:items-center'>
            {
                user?.uid ?
                    <button
                        onClick={handleLogOut}
                        className='btn-primary btn-sm text-white capitalize px-4 lg:px-6'
                    >
                        Logout
                    </button>
                    :
                    <Link
                        to='/login'
                        className='btn-primary btn-sm text-white capitalize'
                    >
                        Login<BiLogInCircle className='text-lg lg:text-xl'></BiLogInCircle>
                    </Link>
            }
        </li>
    </>

    return (
        <div style={{ backgroundColor: '#F6F6F6' }}>
            <div className="navbar max-w-5xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className='w-24'>
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex items-center">
                    <ul className="menu menu-horizontal font-medium px-1">
                        {menuItem}
                    </ul>
                </div>
                <div className='navbar-end lg:hidden'>
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;