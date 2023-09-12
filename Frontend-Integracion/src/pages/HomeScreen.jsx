import React, { useEffect, useState } from "react";
import CardCurso from "../components/CardCurso";
import NavCategorias from "../components/NavCategorias";

import { getCursos } from "../helpers/cursoApi";

import "../css/home.css";
import PaginationCursos from "../components/PaginationCursos";

const HomeScreen = () => {
  const [categoria, setCategoria] = useState("");
  const [cursos, setCursos] = useState(null);

  //paginacion
  const [pagina, setPagina] = useState(0);
  const [totalCursos, setTotalCursos] = useState(0);

  const categoriaSeleccionada = (categoria) => {
    setCategoria(categoria);
  };

  useEffect(() => {
    setCursos(null);
    traerCursos();
  }, [categoria]);

  const traerCursos = async () => {
    const { cursos, total } = await getCursos(pagina);
    setTotalCursos(total);
    if (categoria) {
      const cursosFiltrados = cursos.filter((item) => {
        return item.categoria.nombre == categoria;
      });
      console.log(cursosFiltrados);
      setCursos(cursosFiltrados);
    } else {
      setCursos(cursos);
    }
  };

  return (
    <div className="bg-home min-vh-100">
      <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-md-6">
            <h1 className="title">Cursos disponibles</h1>
            <p className="texto">
              Aprende de profesionales con experiencia en cursos prácticos y sin
              rodeos. Mejora tus habilidades, especialízate, y sigue avanzando
              en tu carrera.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <NavCategorias categoriaSeleccionada={categoriaSeleccionada} />
          </div>
        </div>
        <div className="row">
          <div className="col my-3">
            <h3>{categoria ? categoria : "TODAS"}</h3>

            {cursos?.length == 0 && (
              <div className="text-center mt-2">
                <h4>No hay cursos disponibles para esta categoría 😭</h4>
              </div>
            )}
          </div>
        </div>
        {!cursos ? (
          <div className="row">
            <div className="col">
              <h3 className="text-white">Cargando...</h3>
            </div>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-3 g-4 pb-3 ">
            {cursos.map((curso) => (
              <CardCurso key={curso._id} curso={curso} />
            ))}
          </div>
        )}
        {/* <div className="row">
          <div className="col">
            {totalCursos > 0 && (
              <PaginationCursos
                total={totalCursos}
                pagina={pagina}
                setPagina={setPagina}
              />
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomeScreen;
