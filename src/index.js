import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FavoritesProvider } from "./contexts/Favorites";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoritesProvider>
    <App />
  </FavoritesProvider>,
);
