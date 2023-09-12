import React from "react";
import { Link } from "react-router-dom";
import "../css/cards.css";

const CardCurso = ({ curso }) => {
  return (
    <div className="col ">
      <div className="card h-100 text-dark ">
        <div>
          <img src={curso.img} className="card-img-top" alt={curso.nombre} />
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="my-3">
            <h5 className="card-title">{curso.nombre}</h5>
          </div>

          <Link to={`/curso/${curso._id}`} className="btn btn-dark">
            Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCurso;
