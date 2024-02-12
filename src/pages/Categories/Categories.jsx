import React from 'react';

const Category = () => {
  const products = [
    
    {
      id: 1,
      title: 'Product 1',
      image: 'product1.jpg',
      price: 49.99,
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'product2.jpg',
      price: 29.99,
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'product2.jpg',
      price: 29.99,
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'product2.jpg',
      price: 29.99,
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'product2.jpg',
      price: 29.99,
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'product2.jpg',
      price: 29.99,
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'product2.jpg',
      price: 29.99,
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'product2.jpg',
      price: 29.99,
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'product2.jpg',
      price: 29.99,
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'product2.jpg',
      price: 29.99,
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'product2.jpg',
      price: 29.99,
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'product2.jpg',
      price: 29.99,
    },
    // Add more products...
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Category Page</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-700 mb-4">${product.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Выбрать категорию
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;