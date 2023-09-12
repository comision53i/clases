import React from "react";

const PaginationCursos = ({ total, pagina, setPagina }) => {
  const paginas = [];
  const resultado = Math.ceil(total / 6);

  for (let index = 0; index < resultado; index++) {
    paginas.push(index + 1);
  }

  const nextPage = () => {
    //si estoy en la ultima página no puedo avanzar
    if (total - pagina >= 6) {
      setPagina(pagina + 6);
    }
  };

  const backPage = () => {
    if (pagina > 0) {
      setPagina(pagina - 6);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            className={`page-link ${pagina == 0 && "disabled"}`}
            onClick={backPage}
          >
            Previous
          </button>
        </li>
        {paginas.map((item, index) => (
          <li
            className={`page-item ${index * 6 == pagina && "active"}`}
            key={index}
          >
            <button className="page-link" onClick={() => setPagina(index * 6)}>
              {item}
            </button>
          </li>
        ))}

        <li className={`page-item ${total - pagina < 6 && "disabled"}`}>
          <button className="page-link" onClick={nextPage}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationCursos;
