import React, { useEffect, useState } from "react";
import PaginationCursos from "../components/PaginationCursos";
import TableCursos from "../components/TableCursos";
import { getCursos } from "../helpers/cursoApi";

const AdminScreen = () => {
  //estado para guardar lsos cursos
  const [cursos, setCursos] = useState([]);
  const [totalCursos, setTotalCursos] = useState(0);

  //manejar pagina
  const limite = 6;
  const [pagina, setPagina] = useState(0);

  //cargar cursos cuando se monta y queda pendiente de actualización
  useEffect(() => {
    traerCursos();
  }, [pagina]);

  const traerCursos = async () => {
    const { cursos, total } = await getCursos(limite, pagina);
    setCursos(cursos);
    setTotalCursos(total);
  };

  return (
    <div className="bg-dark">
      <div className="container bg-light vh-100">
        <div className="row  py-5">
          <div className="col text-center ">
            <h1>
              <span>
                <i className="fa fa-cogs" aria-hidden="true"></i>{" "}
              </span>
              Panel administrador
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            {cursos.length > 0 ? (
              <>
                <h4>Total de cursos: {totalCursos}</h4>
                <PaginationCursos
                  pagina={pagina}
                  setPagina={setPagina}
                  total={totalCursos}
                />
                <TableCursos cursos={cursos} traerCursos={traerCursos} />
              </>
            ) : (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
