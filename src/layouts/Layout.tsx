import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <main className="pt-24 max-w-6xl mx-auto md:max-lg:px-12 mb-6">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
