import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";


const Layout = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Layout chính */}
            <div className="flex flex-1 mt-[74px]">
                {/* Sidebar */}
                <div className="w-60 bg-slate-50 p-4 border-r border-gray-200">
                    <Sidebar />
                </div>

                {/* Main content */}
                <main className="flex-1 px-5 pt-5 overflow-y-auto bg-gray-100 ">
                    <Outlet />
                </main>

            </div>
        </div>
    );
};

export default Layout;
