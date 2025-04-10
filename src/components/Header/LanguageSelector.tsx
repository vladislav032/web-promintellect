import React from "react";

const LanguageSelector: React.FC = () => {
  return (
    <div className="dropdown me-3">
      <button
        className="btn btn-outline-light dropdown-toggle"
        type="button"
        id="languageDropdown"
        data-bs-toggle="dropdown"
        style={{
          fontWeight: "bold",
          textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
        }}
      >
        RU
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <button className="dropdown-item">EN</button>
        </li>
        <li>
          <button className="dropdown-item">CN</button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;