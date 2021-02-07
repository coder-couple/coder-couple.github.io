import React from 'react';
import './Navigation.css';
import NavigationLink from './NavigationLink';

const Navigation = () => (
  <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0 text-green text-2xl logo">
            Coder Couple
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavigationLink to="/">Home</NavigationLink>
              <NavigationLink to="/about">About Us</NavigationLink>
              <NavigationLink to="/projects">Projects</NavigationLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
