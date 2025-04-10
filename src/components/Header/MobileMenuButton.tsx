import React from "react";

interface MobileMenuButtonProps {
  expanded: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  expanded,
  toggleMenu,
}) => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      onClick={toggleMenu}
      aria-expanded={expanded}
      style={{
        borderColor: "#fff",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.3)",
      }}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

export default MobileMenuButton;