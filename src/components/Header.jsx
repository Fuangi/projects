import { NavLink } from "react-router-dom";

function Header({ setShowEoyForm }) {
  return (
    <header className="header">
      <div className="container">
        <div className="links-container">
          <NavLink to="eoy" className="logo">
            Proposal Hub
          </NavLink>
          <NavLink to="design" className="logo">
            Design Project
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
