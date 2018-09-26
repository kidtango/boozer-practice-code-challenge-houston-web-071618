import React, { Component } from "react";
import CocktailsList from "./CocktailsList";
import CocktailDisplay from "./CocktailDisplay";
import Form from "./Form";
import axios from "axios";

class CocktailsContainer extends Component {
  state = {
    cocktails: [],
    currentCocktail: null,
    ingredients: []
  };

  componentDidMount() {
    axios
      .get("https://react-boozer-backend.herokuapp.com/api/v1/cocktails")
      .then(res => this.setState({ cocktails: res.data }));
  }
  s;

  onCocktailClick = id => {
    axios
      .get(`https://react-boozer-backend.herokuapp.com/api/v1/cocktails/${id}`)
      .then(res => this.setState({ currentCocktail: res.data }));
  };

  addCocktail = cocktail => {
    console.log(cocktail);
    const cocktails = [...this.state.cocktails];
    cocktails.push(cocktail);

    this.setState({ cocktails });
  };

  render() {
    const { cocktails, currentCocktail } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col s2">
            <CocktailsList
              cocktails={cocktails}
              handleClick={this.onCocktailClick}
            />
          </div>
          <div className="col s5">
            {currentCocktail ? (
              <CocktailDisplay cocktail={currentCocktail} />
            ) : (
              <div className="progress">
                <div className="indeterminate" />
              </div>
            )}
          </div>
          <div className="col s4">
            <Form addCocktail={this.addCocktail} />
          </div>
        </div>
      </div>
    );
  }
}

export default CocktailsContainer;
