import React from "react";
import {Link} from 'react-router-dom';
interface Props {
  nombre: string;
  enlace: string;
}

const NavBarItem = ({ nombre, enlace }: Props) => {
  return (
    <li className="nav-item mx-4 fs-5">
      <Link to={enlace} className="nav-link">{nombre}</Link>
    </li>
  );
};

export default NavBarItem;
