import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-[80px] flex items-center bg-white">
      {/* Logo */}
      <div className="flex items-center ml-20">
        <img src="/static/images/nav.png" alt="Logo" className="h-10 w-auto" />
      </div>
      {/* Search Box */}

      <div className="ml-32 w-[576px] h-[48px]">
        <input
          type="text"
          placeholder="Search events..."
          className="py-2 px-4 bg-gray-50 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 w-full h-full"
        />
      </div>
    </header>
  );
};

export default Header;

