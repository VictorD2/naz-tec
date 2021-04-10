import React from "react";
import ServiciosItem from "./ServicioItem";
import {
  faGlobe,
  faUserFriends,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";

const Servicios = () => {
  
  return (
    <section>
      <div className="container my-5">
        <h3 className="text-center my-5 text-uppercase">Nuestros Servicios</h3>
        <div className="row">
          <ServiciosItem
            icono={faGlobe}
            nombre={"Desarrollo Web"}
            descripcion={
              "Desarrollamos sitios web administrables, con la última tecnología en programación."
            }
          />
          <ServiciosItem
            icono={faFileCode}
            nombre={"Desarrollo de Software a medida"}
            descripcion={
              "Mejoramos el rendimiento de las actividades de las empresas y automatizamos procesos dando soluciones innovadoras y efectivas."
            }
          />
          <ServiciosItem
            icono={faUserFriends}
            nombre={"Social Media SMM."}
            descripcion={
              "Apuesta por un contenido original y un manejo de redes profesional."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Servicios;
