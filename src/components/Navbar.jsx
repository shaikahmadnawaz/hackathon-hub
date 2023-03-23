import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-[1440px] h-[64px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <img className="h-8 w-auto mr-2" src="/logo.svg" alt="Logo" />
            {/* Name */}
            <p className="text-black font-medium text-lg">Planet</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
