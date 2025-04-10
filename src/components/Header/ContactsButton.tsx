import React from "react";
import { NavLink } from "react-router-dom";

interface ContactsButtonProps {
  closeNav: () => void;
}

const ContactsButton: React.FC<ContactsButtonProps> = ({ closeNav }) => {
  return (
    <NavLink
      to="/contacts"
      className="btn btn-warning text-dark fw-bold"
      onClick={closeNav}
      style={{
        boxShadow: "0px 4px 6px rgba(0,0,0,0.3)",
        fontSize: "1rem",
      }}
    >
      Контакты
    </NavLink>
  );
};

export default ContactsButton;