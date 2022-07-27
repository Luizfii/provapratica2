import React from "react";
import { Link } from "react-router-dom";

const FilmeDetail = (props) => {
  const { name, description, rating } = props.location.state.filme;
  return (
    <div className="main">
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{description, rating}</div>
        </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            voltar para a lista de filmes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FilmeDetail;