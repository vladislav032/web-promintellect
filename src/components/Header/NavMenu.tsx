import React from "react";
import { NavLink } from "react-router-dom";

interface NavMenuProps {
  closeNav: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ closeNav }) => {
  return (
    <ul className="navbar-nav mb-2 mb-lg-0 d-flex">
      <li className="nav-item">
        <NavLink
          className="btn btn-outline-primary btn-lg mx-3"
          to="/services"
          onClick={closeNav}
        >
          Услуги
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="btn btn-outline-primary btn-lg mx-3"
          to="/products"
          onClick={closeNav}
        >
          Продукция
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="btn btn-outline-primary btn-lg mx-3"
          to="/technologies"
          onClick={closeNav}
        >
          Технологии
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="btn btn-outline-primary btn-lg mx-3"
          to="/blog"
          onClick={closeNav}
        >
          Блог
        </NavLink>
      </li>
    </ul>
  );
};

export default NavMenu;