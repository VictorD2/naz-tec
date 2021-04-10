import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
interface Props {
  nombre: string;
  descripcion: string;
  icono: IconDefinition;
}
const ServicioItem = ({ nombre, descripcion, icono }: Props) => {
  return (
    <div className="col-md-4 d-flex flex-column text-center align-items-around my-3">
      <div className="fs-1 iconos">
        <FontAwesomeIcon icon={icono} />
      </div>
      <div>
        <h3 className="m-4 fs-5">{nombre}</h3>
      </div>
      <div>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};

export default ServicioItem;
