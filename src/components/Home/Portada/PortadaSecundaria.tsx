import React from "react";

const PortadaSecundaria = () => {
  return (
    <section
      className="portada-2"
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
              Es hora de hacer crecer tu negocio
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortadaSecundaria;
