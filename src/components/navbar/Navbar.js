import React from "react";
import { useNavigate } from "react-router-dom";
import FLAG from "../../content/img/flag.png";

export default function Navbar() {
  const Navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{fontFamily: 'Lobster'}}>
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => Navigate("/")} style={{cursor: 'pointer'}}>
            <img src={FLAG} width={"40px"} />
          </a>
          <a className="navbar-brand" onClick={() => Navigate("/")} style={{cursor: 'pointer'}}>Rederth</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" onClick={() => Navigate("/")} style={{cursor: 'pointer'}}>
                Home
              </a>
              <a className="nav-link" onClick={() => Navigate("/citizenship")} style={{cursor: 'pointer'}}>
                Citizenship
              </a>
              <a className="nav-link" onClick={() => Navigate("/docs")} style={{cursor: 'pointer'}}>
                Documents
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
