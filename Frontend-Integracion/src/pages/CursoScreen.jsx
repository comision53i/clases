import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCursoById } from "../helpers/cursoApi";

import "../css/curso.css";

const CursoScreen = () => {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);

  useEffect(() => {
    //ejecutar la peticion
    traerDatosDeCurso();
  }, []);

  const traerDatosDeCurso = async () => {
    const { curso } = await getCursoById(id);

    setCurso(curso);
  };

  return (
    <div className="bg-dark min-vh-100">
      <div className="container">
        <div className="row py-5 bg-light">
          {curso && (
            <>
              <div className="col-12 col-md-6">
                <div className="container-img">
                  <img src={curso.img} alt={curso.nombre} />
                </div>
              </div>
              <div className="col-12 col-md-6 mt-3">
                <div>
                  <span className="badge rounded-pill text-bg-dark mb-3">
                    {curso.categoria.nombre}
                  </span>
                </div>
                <h3>{curso.nombre}</h3>
                <p>{curso.descripcion}</p>
                <div className="d-flex flex-column align-items-end me-3">
                  <h3>${curso.precio}</h3>
                  <button className="btn btn-dark">Comprar</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CursoScreen;
