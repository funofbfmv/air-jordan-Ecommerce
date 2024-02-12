import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-primary"
        onClick={toggleDropdown}
      >
        <span className="mr-2">Menu</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 14l6-6H4l6 6z"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 w-48 mt-2 py-2 bg-white border border-gray-300 rounded-md shadow-lg">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            Option 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            Option 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            Option 3
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;