import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai'

const Header = () => {
    const menuLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/my-portfolio'>My Portfolio</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
    </>
    return (
        <header className='sticky top-0'>
            <div className="container mx-auto">
                <div class="navbar bg-base-100">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuLinks}
                            </ul>
                        </div>
                        <Link to='/' class="btn btn-ghost normal-case text-xl">Tech Parts</Link>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            {menuLinks}
                        </ul>
                    </div>
                    <div class="navbar-end">
                        <Link to='/login' className=" btn btn-ghost btn-circle bg-gray-100">
                            <AiOutlineUser className='text-lg' />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;