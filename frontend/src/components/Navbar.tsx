import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white/80 backdrop-blur-lg px-8 py-4 shadow-xl flex items-center justify-between rounded-b-3xl border-b border-gray-200">
            <div className="flex items-center gap-3">
                <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                    Jupiter
                </span>
               
            </div>
            <ul className="flex items-center gap-10">
                <li>
                    <a
                        href="/"
                        className="relative text-gray-800 font-semibold px-3 py-1 transition-all duration-200 hover:text-indigo-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gradient-to-r from-indigo-500 to-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="/dashboard"
                        className="relative text-gray-800 font-semibold px-3 py-1 transition-all duration-200 hover:text-indigo-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-gradient-to-r from-indigo-500 to-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                    >
                        Dashboard
                    </a>
                </li>
            </ul>
            <div className="flex items-center gap-4">
                <a
                    href="/login"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold shadow-lg hover:from-indigo-600 hover:to-pink-600 transition-all duration-200 border border-transparent hover:scale-105 active:scale-95"
                >
                    Login
                </a>
                <a
                    href="/register"
                    className="px-5 py-2 rounded-xl bg-white text-indigo-600 font-bold shadow-lg border border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                    Register
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
