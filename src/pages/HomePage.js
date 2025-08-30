import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  const [recipes, setRecipes] = useState([]); // state stores all recipes
  const [filteredRecipes, setFilteredRecipes] = useState([]); // state stores filtered recipes

  useEffect(() => {
    fetch("/data/recipes.json") // fetches recipes
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data); // store all recipes
        setFilteredRecipes(data); // store filtered recipes
      })
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  // filters recipes from search bar
  const handleSearch = (query) => {
    const filtered = recipes.filter((r) =>
      r.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredRecipes(filtered); // update displayed recipes
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Pinoy Recipe Finder</h1>

        <SearchBar onSearch={handleSearch} />

        <div className="row">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} /> // displays recipe card
          ))}
        </div>
      </div>
    </>
  );
}
export default HomePage;
