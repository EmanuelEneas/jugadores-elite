import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio(props){
    return ( 
    <div className=" contenedor-testimonio"> 
    <img className="imagenes-testimonio"
     src={require(`../imagenes/${props.imagen}.jpeg`)} 
     alt="foto de frances"/>
     <div className="contenedor-texto-testimonio">
     <p className="nombre-testimonio"> 
      <strong>{props.nombre}</strong>strong de {props.pais}</p>
     <p className="cargo-testimonio">{props.cargo} de <strong>{props.equipo}</strong></p>
     <p className="texto-testimonio">{props.testimonio}</p>
     </div>

    </div>

    );
}
export default Testimonio;