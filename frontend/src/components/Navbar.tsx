import { CiSearch, CiShop } from "react-icons/ci";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const isLoggedIn = Boolean(localStorage.getItem("token"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white px-6 py-4 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Brand + Hamburger */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-indigo-800 text-transparent bg-clip-text">
              Jupiter
            </span>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center flex-1 justify-start ml-6">
          <div className="flex items-center gap-2 pl-4 pr-3 py-1.5 rounded-3xl bg-gray-100 w-64">
            <CiSearch className="text-2xl text-gray-500" />
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Right Side: Nav, CTA, Auth */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-8">
            <li>
              <a href="/" className="text-sm text-gray-600 hover:text-indigo-600">Home</a>
            </li>
            <li>
              <a href="/dashboard" className="text-sm text-gray-600 hover:text-indigo-600">Dashboard</a>
            </li>
          </ul>

          <a
            href="/seller/onboard"
            className="flex items-center gap-1.5 text-sm font-medium text-indigo-700 bg-indigo-50 px-4 py-2 rounded-lg hover:bg-indigo-100 transition"
          >
            <CiShop className="text-lg" />
            <span>Become a Seller</span>
          </a>

          {/* Profile Dropdown Trigger */}
          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              {/* Profile Image Button */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 focus:outline-none cursor-pointer"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true" 
              >
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center border border-indigo-200">
                  <span className="text-indigo-600 font-semibold">U</span>
                </div>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200">
                  <ul className="py-1">
                    <li>
                      <a
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <a href="/login" className="text-sm text-gray-600 hover:text-indigo-600">Login</a>
              <a
                href="/register"
                className="text-sm font-medium text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Register
              </a>
            </div>
          )}
        </div>

        {/* Mobile Menu (Same as before, omitted for brevity) */}
        {/* ... */}
      </div>
    </nav>
  );
};

export default Navbar;