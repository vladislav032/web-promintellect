import React, { useMemo } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import ContactsButton from "./ContactsButton";

const Header: React.FC = () => {
  // Оптимизация логики с использованием useMemo
  const headerStyles = useMemo(
    () => ({
      backgroundColor: "rgb(255, 255, 255)", // Цвет фона
      borderBottom: "2px solid rgb(172, 172, 172)", // Граница
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)", // Тень для хедера
    }),
    []
  );

  return (
    <header className="py-3" style={headerStyles}>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Логотип */}
          <div className="me-auto d-flex align-items-center">
            <Logo closeNav={() => {}} />
          </div>

          {/* Кнопка для открытия мобильного меню */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Основное меню */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            {useMemo(() => <NavMenu closeNav={() => {}} />, [])}
          </div>

          {/* Кнопка контактов */}
          <div className="d-none d-lg-block">
            {useMemo(() => <ContactsButton closeNav={() => {}} />, [])}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;