import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    description: "",
    instructions: "",
    proportion: [{ ingredient_name: "", amount: "" }]
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler(addCocktail, e) {
    e.preventDefault();
    addCocktail(this.state);
  }

  onClick = e => {};

  render() {
    const { addCocktail } = this.props;
    return (
      <form
        onSubmit={e => {
          this.onSubmitHandler(addCocktail, e);
        }}
      >
        <h4>Create a Cocktail</h4>

        <p>Name</p>
        <input type="text" name="name" onChange={this.onChange} />

        <p>Description</p>
        <input ype="text" name="description" onChange={this.onChange} />

        <p>Instructions</p>
        <input type="text" name="instruction" onChange={this.onChange} />

        <h4>Proportions</h4>
        <div className="container">
          <p>
            Ingredient Name
            <br />
            <input
              type="text"
              name="ingredient_name"
              onChange={this.onChange}
            />
          </p>

          <p>
            Quantity
            <br />
            <input type="text" name="amount" onChange={this.onChange} />
          </p>
        </div>

        <p>
          <a
            className="btn-floating btn-large waves-effect waves-light blue"
            onClick={this.onClick}
          >
            <i className="material-icons">add</i>
          </a>
        </p>

        <input className="waves-effect waves-light btn" type="submit" />
      </form>
    );
  }
}

export default Form;
