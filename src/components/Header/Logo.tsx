import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  closeNav: () => void;
}

const Logo: React.FC<LogoProps> = ({ closeNav }) => {
  return (
    <Link
      className="navbar-brand d-flex align-items-center"
      to="/"
      onClick={closeNav}
      style={{
        justifyContent: "flex-start", // Размещение лого слева
      }}
    >
      <img
        src="src/assets/PromIntellect_logotype_tm_black.png"
        className="me-2"
        style={{
          height: "140px",
        }}
        alt="Logo"
      />
      <span
        className="d-none d-lg-block"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        METALLURGY PRO
      </span>
    </Link>
  );
};

export default Logo;