import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { LuBrain } from "react-icons/lu";
import { GoHome, GoBook } from "react-icons/go";
import { HiOutlineCalculator } from "react-icons/hi2";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
    const [openNav, setOpenNav] = useState<boolean>(false)

    const navItems = [
        { id: 1, path:'/', name: 'Home', icon: <GoHome size={20}/> },
        { id: 2, path:'/estimator', name: 'Estimator', icon: <HiOutlineCalculator size={20}/> },
        { id: 3, path:'/model-explanation', name: 'Model Explanation', icon: <GoBook size={20}/> },
    ];

    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-5 bg-white dark:bg-blue-950 shadow-md">

            <NavLink to='/' className='text-black dark:text-white flex items-center gap-4'>
                <LuBrain size={30} className="text-blue-600" />
                Credit Scoring AI
            </NavLink>

            {/* desktop */}
            <nav className="hidden md:flex justify-end gap-5 w-full">
                <ThemeToggle />
                {
                    navItems.map(item => (
                        <NavLink to={item.path} key={item.id}>{item.name}</NavLink>
                    ))
                }
            </nav>

            <div className="flex items-center gap-5">
                <ThemeToggle />
                <div className="md:hidden relative flex items-center">
                    {/* mobile bouton */}
                    <button className="md:hidden" onClick={() => setOpenNav(!openNav)}>
                        {
                            openNav ?
                                <AiOutlineClose size={25} className="text-black dark:text-white spin" />
                            :
                                <AiOutlineMenu size={25} className="text-black dark:text-white spin" />
                        }
                    </button>

                    {/* mobile navigation */}
                    <nav className={ openNav ? 'md:hidden absolute bg-white dark:bg-black top-7 right-0 flex flex-col gap-5 p-5 rounded-lg shadow border border-blue-100' : 'hidden'}>
                        {
                            navItems.map(item => (
                                <NavLink
                                    to={item.path}
                                    key={item.id}
                                    className={({ isActive }) => isActive ? 'bg-blue-600 nav-link' : 'text-black dark:text-white nav-link'}
                                >
                                    {item.icon}
                                    {item.name}
                                </NavLink>
                            ))
                        }
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
