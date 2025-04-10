import React, { useState } from "react";
import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
import NavMenu from "./NavMenu";
import LanguageSelector from "./LanguageSelector";
import ContactsButton from "./ContactsButton";

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => setExpanded(!expanded);
  const closeNav = () => setExpanded(false);

  return (
    <header
      className="bg-gradient sticky-top shadow-lg"
      style={{
        background: "linear-gradient(45deg, #0F2027, #203A43, #2C5364)",
        color: "#fff",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Logo closeNav={closeNav} />
          <MobileMenuButton expanded={expanded} toggleMenu={toggleMenu} />
          <div
            className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
            style={{ transition: "all 0.3s ease-in-out" }}
          >
            <NavMenu closeNav={closeNav} />
            <div className="d-flex align-items-center">
              <LanguageSelector />
              <ContactsButton closeNav={closeNav} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;