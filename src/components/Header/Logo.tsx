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
    >
      <img
        src="/logo.png"
        className="me-2"
        style={{
          height: "50px",
          filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.5))",
        }}
      />
      <span
        className="d-none d-lg-block"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
        }}
      >
        METALLURGY PRO
      </span>
    </Link>
  );
};

export default Logo;