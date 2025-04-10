import React from "react";
import { NavLink, Link } from "react-router-dom";

interface NavMenuProps {
  closeNav: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ closeNav }) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
        <NavLink
          className={({ isActive }) =>
            `nav-link dropdown-toggle ${isActive ? "text-warning" : ""}`
          }
          to="/services"
          role="button"
          onClick={closeNav}
        >
          Услуги
        </NavLink>
        <ul className="dropdown-menu">
          <li>
            <Link
              className="dropdown-item"
              to="/services/erp"
              onClick={closeNav}
            >
              ERP-системы
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/services/mes"
              onClick={closeNav}
            >
              MES-решения
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/services/consulting"
              onClick={closeNav}
            >
              Консалтинг
            </Link>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            `nav-link ${isActive ? "text-warning" : ""}`
          }
          to="/products"
          onClick={closeNav}
        >
          Продукция
        </NavLink>
      </li>

      <li className="nav-item dropdown">
        <NavLink
          className={({ isActive }) =>
            `nav-link dropdown-toggle ${isActive ? "text-warning" : ""}`
          }
          to="/technologies"
          role="button"
          onClick={closeNav}
        >
          Технологии
        </NavLink>
        <ul className="dropdown-menu">
          <li>
            <Link
              className="dropdown-item"
              to="/technologies/steelmaking"
              onClick={closeNav}
            >
              Производство стали
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item"
              to="/technologies/rolling"
              onClick={closeNav}
            >
              Прокатное производство
            </Link>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            `nav-link ${isActive ? "text-warning" : ""}`
          }
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