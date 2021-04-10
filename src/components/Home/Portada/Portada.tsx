import React from "react";
import { Link } from "react-router-dom";

const Portada = () => {
  return (
    <section
      className="portada"
      style={{
        backgroundImage: "url(fondo.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="position-relative text-center">
          <div className="d-flex justify-content-center flex-column align-items-center container-texto">
            <h1 className="mb-4 text-black">
              No te quedes atrás perdiendo clientes por no estar presente en la
              web
            </h1>
            <p>
              <Link
                className="btn btn-primary m-2 px-4 py-2 fs-5"
                style={{ borderRadius: "20px" }}
                to="/"
              >
                Apply Now
              </Link>
              <Link
                className="btn btn-primary m-2 px-4 py-2 fs-5"
                style={{ borderRadius: "20px" }}
                to="/"
              >
                Apply Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portada;
