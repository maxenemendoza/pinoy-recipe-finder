import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // import css

function RecipeCard({ recipe }) {
  return (
    <div className="col-md-4 d-flex align-items-stretch mb-4">
      <div className="card shadow-sm recipe-card">
        {/* display recipe image */}
        <img src={recipe.image} alt={recipe.name} />

        <div className="card-body d-flex flex-column">
          {/* display recipe name */}
          <h5 className="card-title">{recipe.name}</h5>

          {/* display recipe description */}
          <p className="card-text flex-grow-1">{recipe.description}</p>

          {/* link to recipe page */}
          <Link to={`/recipe/${recipe.id}`} className="btn btn-primary mt-auto">
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}
export default RecipeCard;
