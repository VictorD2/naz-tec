import React from "react";
import { Link } from "react-router-dom";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-center">
      <div className="row container-fluid text-center">
        <Link className="col-md-2 navbar-brand d-inline text-center" to="/">
          <img className="img-fluid w-50" src="3.svg" alt="Logo NazTec" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Opciones */}
        <div className="row col-md-10 collapse navbar-collapse" id="navbarNav">
          <ul className="col-md-12 navbar-nav d-flex justify-content-end align-content-center">
            <NavBarItem nombre={"Home"} enlace={"/"}/>
            <NavBarItem nombre={"Portafolio"} enlace={"/Portafolio"}/>
            <NavBarItem nombre={"Servicios"} enlace={"/Servicios"}/>
            <NavBarItem nombre={"Conócenos"} enlace={"/Conocenos"}/>
            <NavBarItem nombre={"Eventos"} enlace={"/Eventos"}/>
            <NavBarItem nombre={"Contáctanos"} enlace={"/Contactanos"}/>
          </ul>
        </div>
      
      </div>
    </nav>
  );
};
export default NavBar;
