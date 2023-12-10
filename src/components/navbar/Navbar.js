import React from "react";
import { useNavigate } from "react-router-dom";
import FLAG from "../../content/img/flag.png";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          fontFamily: "Lobster",
          backgroundColor: "#808080",
        }}
      >
        <div className="container-fluid">
          <a
            href="/"
            className="navbar-brand"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          >
            <img src={FLAG} width={"40px"} alt="Flag" />
          </a>
          <a
            href="/"
            className="navbar-brand text-light"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          >
            Rederth
          </a>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                href="/"
                className="nav-link text-light"
                aria-current="page"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
                style={{ cursor: "pointer" }}
              >
                Home
              </a>
              <a
                href="/citizenship"
                className="nav-link text-light"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/citizenship");
                }}
                style={{ cursor: "pointer" }}
              >
                Citizenship
              </a>
              <a
                href="/docs"
                className="nav-link text-light"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/docs");
                }}
                style={{ cursor: "pointer" }}
              >
                Documents
              </a>
              <a
                href="/heads"
                className="nav-link text-light"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/heads");
                }}
                style={{ cursor: "pointer" }}
              >
                Officials
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
