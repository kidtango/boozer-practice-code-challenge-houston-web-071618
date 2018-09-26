import React from "react";

const CocktailDisplay = ({
  cocktail: { name, description, instructions, proportions }
}) => {
  // console.log(proportions);
  return (
    <div>
      <h4>{name}</h4>
      <p>
        <span>Description:</span> {description}
      </p>
      <p>Instructions: {instructions}</p>
      <p>Ingredients: </p>
      <ul>
        {proportions.map(ingredient => (
          <li key={ingredient.id}>
            {ingredient.ingredient_name} {ingredient.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailDisplay;
