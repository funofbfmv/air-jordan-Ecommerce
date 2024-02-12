import React from 'react';

const NewsCard = ({ title, date, image, description }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt="News" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{date}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;