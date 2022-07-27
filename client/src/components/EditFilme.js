import React from "react";

class EditFilme extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, description, rating } = props.location.state.Filme;
    this.state = {
      id,
      name,
      description,
	  rating
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.description === ""|| this.state.rating === "") {
      alert("todos os campos são obrigatórios!");
      return;
    }
    this.props.updateFilmeHandler(this.state);
    this.setState({ name: "", description: "", rating:"" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Editar Filme</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Nome do filme</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>description</label>
            <input
              type="text"
              name="description"
              placeholder="description"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
		  <div className="field">
            <label>rating</label>
            <input
              type="Number"
              name="rating"
              placeholder="rating"
              value={this.state.rating}
              onChange={(e) => this.setState({ rating: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditFilme;