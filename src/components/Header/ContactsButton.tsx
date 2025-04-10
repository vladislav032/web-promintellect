import React from "react";
import { NavLink } from "react-router-dom";

interface ContactsButtonProps {
  closeNav: () => void;
}

const ContactsButton: React.FC<ContactsButtonProps> = ({ closeNav }) => {
  return (
    <NavLink
      to="/contacts"
      className="btn btn-lg text-white fw-bold"
      style={{
        backgroundColor: "rgb(43, 42, 41)", // Желтый цвет кнопки
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        fontSize: "1rem",
      }}
      onClick={closeNav}
    >
      Контакты
    </NavLink>
  );
};

export default ContactsButton;