import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
    const [openNav, setOpenNav] = useState<boolean>(false)

    const navItems = [
        { id: 1, path:'/', name: 'Home' },
        { id: 2, path:'/estimator', name: 'Estimator' },
        { id: 1, path:'/model-explanation', name: 'Model Explanation' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full">

            {/* desktop */}
            <nav className="hidden md:flex justify-end gap-5 w-full">
                <ThemeToggle />
                {
                    navItems.map(item => (
                        <Link to={item.path}>{item.name}</Link>
                    ))
                }
            </nav>

            {/* mobile bouton */}
            <button className="md:hidden" onClick={() => setOpenNav(!openNav)}>
                {
                    openNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />
                }
            </button>

            {/* mobile navigation */}
            <nav className={ openNav ? 'md:hidden' : 'hidden'}>
                {
                    navItems.map(item => (
                        <Link to={item.path}>{item.name}</Link>
                    ))
                }
            </nav>
        </header>
    );
};

export default Header;
