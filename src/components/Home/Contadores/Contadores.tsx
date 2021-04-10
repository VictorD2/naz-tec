import React from "react";

const Contadores = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <p className="fs-1">123</p>
            <h5 className="text-black-50">WEB</h5>
          </div>
          <div className="col-md-4">
            <p className="fs-1">26</p>
            <h5 className="text-black-50">SOFTWARE</h5>
          </div>
          <div className="col-md-4">
            <p className="fs-1">168</p>
            <h5 className="text-black-50">CLIENTES</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contadores;
