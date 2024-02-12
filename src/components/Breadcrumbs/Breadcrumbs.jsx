import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path !== '');

  return (
    <nav className="text-lg m-6" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link to="/">Главная</Link>
          <svg
            className="w-3 h-3 mx-1 text-gray-500"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M4.5 10.5l3-3-3-3" />
          </svg>
        </li>
        {paths.map((path, index) => {
          const routeTo = `/${paths.slice(0, index + 1).join('/')}`;
          const isLast = index === paths.length - 1;

          return (
            <li className="flex items-center" key={path}>
              {!isLast ? (
                <>
                  <Link to={routeTo}>{path}</Link>
                  <svg
                    className="w-3 h-3 mx-1 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M4.5 10.5l3-3-3-3" />
                  </svg>
                </>
              ) : (
                <span>{path}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;