import React from 'react';
import image1 from "../../assets/imges/3297f43d49ab7cafcc3f6eb11b4104d7e9d4b4b3-1100x735.jpg"
import image2 from "../../assets/imges/8670e289953683.5e0777cc42717.jpeg"
import image3 from "../../assets/imges/artboard_1_4x.jpeg"


const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">О нас</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed tortor ligula.
            Integer suscipit tellus in placerat venenatis. Vestibulum quis sapien nec dolor
            consequat euismod. Nulla facilisi.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-2xl hover:scale-500 object-cover transform transition duration-300 hover:scale-105">
            <img
              src={image1}
              alt="Image 1"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold mb-2">Карточка 1</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed tortor ligula.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-2xl hover:scale-500 object-cover transform transition duration-300 hover:scale-105">
            <img
              src={image2}
              alt="Image 2"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold mb-2">Карточка 1 О нас</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed tortor ligula.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-2xl hover:scale-500 object-cover transform transition duration-300 hover:scale-105">
            <img
              src={image3}
              alt="Image 3"
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold mb-2">Карточка 3</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed tortor ligula.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;