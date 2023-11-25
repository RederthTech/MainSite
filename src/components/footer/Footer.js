import React from "react";
import FLAG from "../../content/img/flag.png";

export default function Footer() {
  return (
    <footer
      className="text-light text-center p-4 mt-5"
      style={{
        backgroundColor: "#808080",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Rederth</h5>
            <p className="text-light text-center">
              Rederth, a thriving micronation led by Grand Duke Dylan I,
              champions diplomacy, cooperation, and international respect. This
              unique nation aspires to make its mark on the global stage,
              founded on the principles of a brighter future and unity.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Links</h5>
            <ul className="list-unstyled text-center">
              <li>
                <a
                  href="https://discord.gg/Rnu8TnDkqV"
                  target="_blank"
                  className="text-light"
                >
                  Official Discord Server
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@RederthOfficial?sub_confirmation=1"
                  target="_blank"
                  className="text-light"
                >
                  Official YouTube Channel
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/dylanI_rederth"
                  target="_blank"
                  className="text-light"
                >
                  The Grand Duke's X (Formerly Twitter) Account
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            {/* Add your flag image here */}
            <img src={FLAG} alt="Rederth Flag" width={"100px"} />
          </div>
        </div>
      </div>
      <div className="py-2 text-light" style={{ fontFamily: "Lobster" }}>
        &copy; {new Date().getFullYear} The Grand Duchy of Rederth. All rights
        reserved.
      </div>
    </footer>
  );
}
