import React from "react";

const Navbar = () => {
  return (
    <header className="header_area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="menu_area">
              <nav className="navbar navbar-light navbar-expand-lg">
                <a href="/" className="navbar-brand">
                  Frontend Engineer Test
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
