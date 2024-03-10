import { NavLink } from "react-router-dom";

function Header({ setShowEoyForm }) {
  return (
    <header className="header">
      <div className="container">
        <div
          className="links-container"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={require("./../assets/lmu-logo.jpg")}
            alt="Our landmar logo"
            style={{ height: 50, width: 50, borderRadius: "100%" }}
          />
          <NavLink to="eoy" className="logo">
            Final Year Project
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
