import React from "react";

class AddFilme extends React.Component{
    state = {
        "id": "",
        "name": "",
        "description": "",
        "rating": ""
    };

    add = (e) =>{
        e.preventDefault();
        if(this.state.name === ""|| this.state.description === "" || this.state.description ===""){
            alert("todos os ampos são obrigatórios");
            return;
        }
        this.props.addFilmesHandler(this.state);
        this.setState({"name": "", "description": "", "rating": ""});
        this.props.history.push("/");
    };
    render(){
        return(
            <div className="ui_main">
                <h2>adicionar filme</h2>
                <form className="ui_form" onSubmit={this.add}>
                    <div className="name">
                    <label>Nome do filme</label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Nome do Filme"
                    value={this.state.name}
                    onChange={(e) => this.setState({name: e.target.value})}
                    />
                    </div>
                    <div className="description">
                    <label>Descrição do filme</label>
                    <input
                    type="text"
                    name="description"
                    placeholder="Descrição do Filme"
                    value={this.state.descrition}
                    onChange={(e) => this.setState({description: e.target.value})}
                    />
                    </div>
                    <div className="rating">
                    <label>classificação do filme</label>
                    <input
                    type="number" max={5} min={1}
                    name="rating"
                    placeholder="Classificação do Filme"
                    value={this.state.rating}
                    onChange={(e) => this.setState({rating: e.target.value})}
                    />
                    </div>
                    <button className="ui button blue">Cadastrar Filme</button>
                </form>
            </div>
        );
    }
}
export default AddFilme;