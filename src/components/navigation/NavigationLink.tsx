import React, { PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  to: string;
}

const activeLink =
  'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium';
const inactiveLink =
  'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';

const NavigationLink = (props: PropsWithChildren<Props>) => {
  const location = useLocation();

  return (
    <Link
      to={props.to}
      className={location.pathname === props.to ? activeLink : inactiveLink}
    >
      {props.children}
    </Link>
  );
};

export default NavigationLink;
