import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Nav.scss";

const Nav = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <div className="c-menu">
      <nav className="c-menu__nav">
        <NavLink className="c-menu__link" to="/characters" style={({ isActive }) => ({ borderBottom: isActive ? "1px solid white" : "none" })}>
          {t("Characters")}
        </NavLink>
        <NavLink className="c-menu__link" to="/houses" style={({ isActive }) => ({ borderBottom: isActive ? "1px solid white" : "none" })}>
          {t("Houses")}
        </NavLink>
        <NavLink className="c-menu__link" to="/chrono" style={({ isActive }) => ({ borderBottom: isActive ? "1px solid white" : "none" })}>
          {t("Chronology")}
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
