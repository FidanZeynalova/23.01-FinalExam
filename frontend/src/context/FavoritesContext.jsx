import React, { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

function FavoritesContextProvider({ children }) {
  let local = JSON.parse(localStorage.getItem("favorites"));
  let [fav, setFav] = useState(local ? local : []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(fav));
  });

  const value = {
    fav,
    setFav,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
