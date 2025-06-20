import { useEffect, useRef, useState } from "react";
import API from "../../configs/api";
import { useNavigate } from 'react-router-dom';

import { ShoppingBasket } from 'lucide-react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div>
            <nav className="navbar bg-base-100 rounded-box shadow-sm fixed top-0 left-0 right-0 z-50">
                <div className="flex items-center w-full px-4 py-2 bg-white shadow">
                    {/* Logo bên trái */}
                    <a className="link text-xl font-bold no-underline" href="#">
                        <div className="avatar">
                            <div className="rounded-full">
                                <img className="object-cover w-60" src="/asset/img/lgon.png" alt="Logo" />
                            </div>
                        </div>
                    </a>
                    <div>
                        <div className="text-base px-2">Tổng quan</div>
                    </div>

                    {/* Tất cả phần còn lại đẩy sang phải */}
                    <div className="flex items-center ml-auto space-x-6">
                        <div className="flex items-center space-x-1 px-2">
                            <ShoppingBasket />
                            <span>Sản phẩm</span>
                        </div>

                        {/* Dropdown */}
                        <div className="relative inline-block text-left" ref={dropdownRef}>
                            <button
                                onClick={() => setOpen(!open)}
                                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
                            >
                                Taki Shop
                            </button>

                            {open && (
                                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg ring-1 ring-black ring-opacity-5 rounded-md p-4 space-y-2 z-50">
                                    <div>
                                        <p className="font-semibold text-gray-900">Bùi Anh Tài</p>
                                        <p className="text-sm text-gray-500">buianhtai123@gmail.com</p>
                                    </div>

                                    <hr />

                                    <div className="flex items-center gap-2 text-sm text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10.707 1.293a1 1 0 00-1.414 0l-7 7A1 1 0 003 9h1v6a2 2 0 002 2h2a1 1 0 001-1v-3h2v3a1 1 0 001 1h2a2 2 0 002-2V9h1a1 1 0 00.707-1.707l-7-7z" />
                                        </svg>
                                        <span>takishop</span>
                                    </div>

                                    <hr />

                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>
                                            <button className="hover:text-blue-600 w-full text-left">Quản lí tài khoản</button>
                                        </li>
                                        <li>
                                            <button className="hover:text-blue-600 w-full text-left">Hướng dẫn sử dụng</button>
                                        </li>
                                        <li>
                                            <button className="text-red-600 hover:text-red-700 w-full text-left">Đăng xuất</button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </nav >
        </div >
    );
};

export default Navbar;
