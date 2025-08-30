import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../contexts/Favorites";
import Navbar from "../components/Navbar";

function FavoritesPage() {
  // get favorite recipes and function to remove favorite recipes
  const { favorites, removeFavorite } = useFavorites();

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mb-4">My Favorite Recipes</h2>

        {/* checks for favorite recipes */}
        {favorites.length === 0 ? (
          <p>No favorite recipes yet.</p>
        ) : (
          <div className="row">
            {favorites.map((recipe) => (
              <div className="col-md-4 mb-4" key={recipe.id}>
                <div className="card shadow-sm h-100">
                  {/* displays recipe image */}
                  {recipe.image && (
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="card-img-top favorite-card-img"
                    />
                  )}

                  {/* displays recipe description */}
                  <div className="card-body">
                    <h5 className="card-title">{recipe.name}</h5>
                    <p className="card-text">
                      {recipe.description?.slice(0, 100)}...
                    </p>

                    {/* link to recipe page */}
                    <Link
                      to={`/recipe/${recipe.id}`}
                      className="btn btn-primary me-2"
                    >
                      View Recipe
                    </Link>

                    {/* removes favorite recipe */}
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFavorite(recipe.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default FavoritesPage;
