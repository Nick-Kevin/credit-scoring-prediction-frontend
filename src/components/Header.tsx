import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { LuBrain } from "react-icons/lu";
import { GoHome, GoBook } from "react-icons/go";
import { HiOutlineCalculator } from "react-icons/hi2";
import ThemeToggle from "./ThemeToggle";

interface NavItem {
    id: number,
    path: string,
    name: string,
    icon: React.JSX.Element,
}

const Header: React.FC = () => {
    const [openNav, setOpenNav] = useState<boolean>(false);

    const handleMobileMenu = (): void => {
        setOpenNav(!openNav);
    };

    const navItems: NavItem[] = [
        { id: 1, path:'/', name: 'Home', icon: <GoHome size={18}/> },
        { id: 2, path:'/estimator', name: 'Estimator', icon: <HiOutlineCalculator size={18}/> },
        { id: 3, path:'/model-explanation', name: 'Model Explanation', icon: <GoBook size={18}/> },
    ];

    return (
        <header className="fixed z-50 top-0 left-0 w-full shadow-md max-md:flex max-md:justify-between max-md:items-center bg-white dark:bg-gray-900">

            <div className="flex justify-between items-center p-5 lg:px-16 xl:px-6 max-w-7xl md:mx-auto">
                <NavLink to='/' className='flex items-center gap-4 whitespace-nowrap'>
                    <LuBrain size={30} className="text-blue-600" />
                    <span className="text-gray-900 dark:text-white xl:text-xl">Credit Scoring AI</span>
                </NavLink>

                {/* desktop */}
                <nav className="hidden md:flex justify-end gap-2 w-full">
                    <ThemeToggle className="mr-4 cursor-pointer" />
                    {
                        navItems.map(item => (
                            <NavLink
                                to={item.path}
                                key={item.id}
                                className={({ isActive }) => isActive ? "destkop-nav-link bg-blue-600 text-white" : "destkop-nav-link text-gray-600 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300 ease-out" }
                            >
                                {item.icon}{item.name}
                            </NavLink>
                        ))
                    }
                </nav>
            </div>

            <div className="md:hidden flex items-center gap-5 pr-5">
                <ThemeToggle />
                <div className="relative flex items-center">
                    {/* mobile bouton */}
                    <button onClick={():void => handleMobileMenu()}>
                        {
                            openNav ?
                                <AiOutlineClose size={25} className="text-black dark:text-white spin" />
                            :
                                <AiOutlineMenu size={25} className="text-black dark:text-white spin" />
                        }
                    </button>

                    {/* mobile navigation */}
                    <nav className={ openNav ? 'absolute bg-white dark:bg-black top-7 right-0 flex flex-col gap-5 p-5 rounded-lg shadow border border-blue-100' : 'hidden'}>
                        {
                            navItems.map(item => (
                                <NavLink
                                    to={item.path}
                                    key={item.id}
                                    onClick={():void => handleMobileMenu()}
                                    className={({ isActive }) => isActive ? 'bg-blue-600 nav-link text-white' : 'text-black dark:text-white nav-link'}
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
