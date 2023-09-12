import React, { useEffect, useState } from "react";
import { getCategorias } from "../helpers/categoriaApi";

const NavCategorias = ({ categoriaSeleccionada }) => {
  const [categorias, setCategorias] = useState(null);
  // const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    traerCategorias();
  }, []);

  const traerCategorias = async () => {
    const datos = await getCategorias();
    console.log(datos.categorias);
    setCategorias(datos.categorias);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <span className="navbar-brand">Categorías:</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavCate"
          aria-controls="navbarNavCate"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavCate">
          {categorias && (
            <ul className="navbar-nav">
              <li className="nav-item me-2">
                <button
                  className="btn btn-dark"
                  onClick={() => categoriaSeleccionada("")}
                >
                  TODAS
                </button>
              </li>
              {categorias.map((categoria) => (
                <li className="nav-item me-2" key={categoria._id}>
                  <button
                    className="btn btn-dark"
                    onClick={() => categoriaSeleccionada(categoria.nombre)}
                  >
                    {categoria.nombre}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavCategorias;
