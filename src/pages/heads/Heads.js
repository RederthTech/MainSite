import React from "react";

const headsOfState = [
  {
    name: "Wyatt I of Skyefall",
    title: "Baron/Lord Minister",
    position: "Lord Minister of Interior",
    email: "wyatt.myers.rederth@gmail.com",
    image:
      "https://cdn.discordapp.com/attachments/1176741438759911494/1178110817238011924/Myers.png?ex=6574f433&is=65627f33&hm=9a116f83fea9d84796806958f6bbb8ee30efdbd0e9094aa6db30b95e8824a4d6&",
  }
  // Add more heads of state as needed
];

const Heads = () => {
  return (
    <div className="container mt-4 mx-auto text-center">
      <h2
        className="text-center mb-4"
        style={{ fontFamily: "lobster", color: "white" }}
      >
        Heads of the Grand Duchy
      </h2>
      {/*GRAND DUKE*/}
      <div className="row mx-auto">
        {/* First Card on Top */}
        <div className="col-md-3 mx-auto">
          {headsOfState.slice(0, 1).map((head, index) => (
            <div
              key={index}
              className="card text-white mb-3"
              style={{
                background: "#3f3f3f",
                border: "none",
                borderRadius: "10px",
                padding: "15px",
              }}
            >
              <img
                src={
                  "https://cdn.discordapp.com/attachments/1176741438759911494/1178111033089478686/Picsart_23-11-22_01-31-47-790.png?ex=6574f466&is=65627f66&hm=d7ca20707f3f3a10ecdfe4ba6ed096ce5e99fda9d888b5d3351e20d4759097d4&"
                }
                alt={"Photograph of Grand Duke Dylan I of Rederth"}
                className="card-img-top rounded mt-4"
                style={{ width: "200px", height: "200px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#f8f9fa" }}>
                  Dylan I of Rederth
                </h5>
                <p className="card-text" style={{ color: "#c0c0c0" }}>
                  <strong>Sovereign</strong>
                  <br />
                  Grand Duke of Rederth
                </p>
                <button
                  className="btn btn-light"
                  data-toggle="modal"
                  data-target={`#contactModalOne`}
                >
                  View Contact Info
                </button>
                {/* Modal for Contact Info */}
                <div
                  className="modal fade"
                  id={`contactModalOne`}
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby={`contactModalLabelOne`}
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div
                      className="modal-content text-dark"
                      style={{ background: "#fff", color: "#f8f9fa" }}
                    >
                      <div className="modal-header">
                        <h5
                          className="modal-title"
                          id={`contactModalLabelOne`}
                        >
                          Dylan I's Contact Info
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        {/* Add contact information here */}
                        Email: <a href="mailto:dylan.rogers.rederth@gmail.com">dylan.rogers.rederth@gmail.com</a>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*EVERYONE ELSE*/}
      <div className="row mx-auto">
        {/* First Card on Top */}
        <div className="col-md-3 mx-auto">
          {headsOfState.slice(0, 1).map((head, index) => (
            <div
              key={index}
              className="card text-white mb-3"
              style={{
                background: "#3f3f3f",
                border: "none",
                borderRadius: "10px",
                padding: "15px",
              }}
            >
              <img
                src={head.image}
                alt={head.name}
                className="card-img-top rounded mt-4"
                style={{ width: "200px", height: "200px", margin: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#f8f9fa" }}>
                  {head.name}
                </h5>
                <p className="card-text" style={{ color: "#c0c0c0" }}>
                  <strong>{head.position}</strong>
                  <br />
                  {head.title}
                </p>
                <button
                  className="btn btn-light"
                  data-toggle="modal"
                  data-target={`#contactModal${index}`}
                >
                  View Contact Info
                </button>
                {/* Modal for Contact Info */}
                <div
                  className="modal fade"
                  id={`contactModal${index}`}
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby={`contactModalLabel${index}`}
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div
                      className="modal-content text-dark"
                      style={{ background: "#fff", color: "#f8f9fa" }}
                    >
                      <div className="modal-header">
                        <h5
                          className="modal-title"
                          id={`contactModalLabel${index}`}
                        >
                          {head.name}'s Contact Info
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        {/* Add contact information here */}
                        Email: <a>{head.email}</a>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        
      </div>
    </div>
  );
};

export default Heads;
