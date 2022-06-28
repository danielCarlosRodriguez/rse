import React, { useState, useEffect } from "react";


export const Tarjeta = () => {
  const [entradas, setEntradas] = useState([]);
  const [cargando, setCargando] = useState(true);

  //Opción 1 carga datos ajax
  const getEntradasAjax = () => {
    fetch(
      "https://www.disco.com.uy/api/dataentities/BL/search?_fields=cuerpo,fecha,img_more,img_principal,titulo,date,resumen"
    )
      .then((respuesta) => respuesta.json())
      .then(
        (resultadoFinal) => {
          setEntradas(resultadoFinal);
          console.log(entradas);
          setCargando(false);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    getEntradasAjax();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //con el array vacío llama a la función solo una vez

  if (cargando) {
    //cuando esta cargadno
    return (
      <div className="cargando">
        <h1>Cargando datos...</h1>
      </div>
    );
  } else {
    return (
      <div className="contenedor">
        <div className="container d-flex flex-wrap">
          {entradas.map((entradas, i) => {
            return (
              <div
                key={i}
                className="tarjeta row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ms-3 mb-3"
              >
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={entradas.img_principal}
                    className="card-img-top"
                    alt={entradas.titulo}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{entradas.titulo}</h5>
                    <p className="card-text">{entradas.resumen}</p>
                    <a href="/#" className="btn btn-primary">
                      Leer Más
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    );
    }
    



    
};