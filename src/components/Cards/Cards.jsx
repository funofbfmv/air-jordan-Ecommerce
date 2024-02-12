import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "../../assets/imges/artboard_1_4x.jpeg"
import image2 from "../../assets/imges/3297f43d49ab7cafcc3f6eb11b4104d7e9d4b4b3-1100x735.jpg"
import image3 from "../../assets/imges/nike_4x.jpeg"
import image4 from "../../assets/Banners/Banner-4.jpg"
const Card = ({ title, image, description, link }) => {
  return (
    <div className="max-w-xs rounded-lg hover:shadow-2xl hover:duration-500 overflow-hidden shadow-lg mx-4 my-6 mt-12">
      <img className="w-full rounded-lg hover:duration-500" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <Link to="/productpage"
          className="inline-block bg-gray-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full hover:duration-500 hover:shadow-2xl"
        >
          В магазин
        </Link>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardsData = [
    {
      title: 'Banner 1',
      image: (image1),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: "/productpage",
    },
    {
      title: 'Banner 2',
      image: (image2),
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      link: '/productpage',
    },
    {
      title: 'Banner 3',
      image: (image3),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: "/productpage",
    },
    {
      title: 'Banner 4',
      image: (image4),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: "/productpage",
    },
    // Add more banners as needed
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          image={card.image}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default Cards;