import React from "react";
import Contadores from "./Contadores/Contadores";
import Portada from "./Portada/Portada";
import PortadaSecundaria from "./Portada/PortadaSecundaria";
import Servicios from "./Servicios/Servicios";

const Home = () => {
  return (
    <div>
      <Portada />
      <Servicios />
      <PortadaSecundaria />
      <Contadores/>
    </div>
  );
};

export default Home;
