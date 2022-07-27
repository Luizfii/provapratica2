import { application } from "express";
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { UUID } from "sequelize/types";
import AddFilme from "./AddFilme"
import {uuid} from "uuidv4";
import api from "../api/filmes"
import Hearder from "./Hearder";
import FilmeList from "./FilmeList";
import FilmeDetail from "./FilmeDetail";
import EditFilme from "./EditFilme";


import "./App.css";

function App() {
  const LOCAL_STORAGE_KEY = "filmes";
  const [filmes, setFilmes] = useState([]);

  const retrieveFilmes = async() =>{
    const response = await api.get ("/filmes");
    return response.data;
  };

  const addFilmeHandler = async (filme) => {
    const request = {
      id:uuid(),
      ...filme,
    };

    const response = await api.post("/filmes/", request);
    setFilmes([...filmes, response.data]);
  };

  const updateFilmeHandler = async (filme) =>{
    const response = await api.put(`/filmes/${filme.id}`, filme);
    const {id, name, description, rating} = response.data;
    setFilmes(
      filmes.map((filme) =>{
        return filme.id === id ? {...response.data} : filme;
      })
    );
  };

const removeFilmeHandler = async (id) => {
  await api.delete(`/filmes/${id}`);
  const newFilmeList = filmes.filter((filme) =>{
    return filme.id !== id;
  });

  setFilmes(newFilmeList);
};

useEffect(() =>{
  const getAllFilmes = async () =>{
    const allFilmes = await retrieveFilmes();
    if (allFilmes) setFilmes(allFilmes);
  };
  getAllFilmes();
}, []);

useEffect(() =>{

},[filmes]);

return(
  <div className="ui_container">
    <Router>
      <Hearder />
      <Switch>

        <Route path="/" exact render = {(props) =>(
          <FilmeList {...props} filmes = {filmes} getFilmeId={removeFilmeHandler}/>
        )}
        />

        <Route path="/add" render ={(props) =>(
          <AddFilme {...props} addFilmeHandler = {addFilmeHandler}/>
        )}
        />

        <Route path="/edit" render={(props) =>(
          <EditFilme {...props} updateFilmeHandler = {updateFilmeHandler}/>
        )}
        />

        <Route path="/filme/:id" component={filmeDetail}/>
      </Switch>
    </Router>
  </div>
);
}
export default App;
