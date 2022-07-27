import React from "react";
import { Link } from "react-router-dom";

const FilmeList = (props) => {

  const deleteFilmeHandler = (id) => {
    props.getFilmeId(id);
  };

  const renderFilmeList = props.filmes.map((filme) => {
    return;
  });
  return (
    <div className="main">
      <h2>
       Lista de filmes
        <Link to="/add">
          <button className="ui button blue right">Adicionar Filme</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderFilmeList}</div>
    </div>
  );
};

export default FilmeList;
