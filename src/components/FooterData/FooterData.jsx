import React from 'react';
import { Link } from 'react-router-dom';

const FooterData = () => {
  const data = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Services', link: '/services' },
    { label: 'Contact', link: '/contact' },
  ];

  return (
    <div className="flex flex-wrap justify-center space-x-8 mt-4">
      {data.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default FooterData;