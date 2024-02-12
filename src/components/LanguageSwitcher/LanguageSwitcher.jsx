import React, { useState } from 'react';

const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-300 text-gray-600 px-3 py-1 rounded-full focus:outline-none"
      >
        <span className="text-gray-600">Lang: </span>
        <span>{selectedLanguage}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            isDropdownOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 13a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 13z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute top-10 right-0 z-10 bg-white rounded-md shadow-md border border-gray-200">
          <ul className="py-1">
            <li>
              <button
                onClick={() => handleLanguageChange('ru')}
                className={`${
                  selectedLanguage === 'ru'
                    ? 'bg-gray-200 text-gray-800'
                    : 'hover:bg-gray-100 text-gray-600'
                } block w-full text-left px-4 py-2`}
              >
                Русский
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLanguageChange('tm')}
                className={`${
                  selectedLanguage === 'tm'
                    ? 'bg-gray-200 text-gray-800'
                    : 'hover:bg-gray-100 text-gray-600'
                } block w-full text-left px-4 py-2`}
              >
                Turkmen
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`${
                  selectedLanguage === 'en'
                    ? 'bg-gray-200 text-gray-800'
                    : 'hover:bg-gray-100 text-gray-600'
                } block w-full text-left px-4 py-2`}
              >
                English
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;