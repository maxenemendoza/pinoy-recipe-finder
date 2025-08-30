import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useFavorites } from "../contexts/Favorites";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // import css

function RecipePage() {
  const { id } = useParams(); // get recipe ID from URL
  const [recipe, setRecipe] = useState(null); // state stores recipe details

  // get favorite recipes and functions to add and remove favorite recipes
  const { favorites, addFavorite, removeFavorite } = useFavorites(); // get context functions

  useEffect(() => {
    fetch("/data/recipes.json") // fetches recipes
      .then((response) => response.json())
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found); // stores found recipe
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-5">Loading recipe...</p>;
  }

  // checks if recipe is already in favorites
  const isFavorite = favorites.some((fav) => fav.id === recipe.id);

  return (
    <>
      <Navbar />
      <div className="container recipe-container">
        {/* displays recipe title */}
        <h2 className="recipe-title">{recipe.name}</h2>

        {recipe.image && (
          <img
            src={recipe.image}
            alt={recipe.name}
            className="recipe-image shadow-sm mb-4"
          />
        )}

        {/* displays recipe description */}
        <p className="recipe-description">{recipe.description}</p>

        <div className="recipe-details">
          <div className="recipe-ingredients">
            {/* displays recipe ingredients */}
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="recipe-instructions">
            {/* displays recipe instructions */}
            <h4>Instructions:</h4>
            <ol>
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="recipe-buttons">
          {/* button to add or remove favorite recipes */}
          {isFavorite ? (
            <button
              className="btn btn-danger mt-3 me-2"
              onClick={() => removeFavorite(recipe.id)}
            >
              Remove from Favorites
            </button>
          ) : (
            <button
              className="btn btn-primary mt-3 me-2"
              onClick={() => addFavorite(recipe)}
            >
              Add to Favorites
            </button>
          )}

          {/* return to home page*/}
          <Link to="/" className="btn btn-secondary mt-3">
            ⬅ Back to Recipes
          </Link>
        </div>
      </div>
    </>
  );
}
export default RecipePage;