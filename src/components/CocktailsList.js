import React, { Component } from "react";


class CocktailsList extends Component {
  render() {
    const { cocktails, handleClick } = this.props;

    return (
      <div id="cocktail-list">
        <ul className="collection with-header">
          <li className="collection-header">
            <h5>List Of Cocktails</h5>
          </li>
          <a href="#">
            {cocktails.map(cocktail => (
              <li
                className="collection-item"
                key={cocktail.id}
                onClick={handleClick.bind(this, cocktail.id)}
              >
                {cocktail.name} <i className="material-icons">add</i>
              </li>
            ))}
          </a>
        </ul>
      </div>
    );
  }
}

export default CocktailsList;
