import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <main className="pt-56">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
