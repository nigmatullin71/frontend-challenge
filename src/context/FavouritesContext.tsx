import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";

type Cat = {
  id: string;
  url: string;
};

type FavouritesContextType = {
  favourites: Cat[];
  addFavourite: (cat: Cat) => void;
  removeFavourite: (id: string) => void;
};

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const FavouritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favourites, setFavourites] = useState<Cat[]>(() => {
    const storedFavourites = localStorage.getItem("favorites");
    return storedFavourites ? JSON.parse(storedFavourites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = (cat: Cat) => {
    setFavourites((prev) => [...prev, cat]);
  };

  const removeFavourite = (id: string) => {
    setFavourites((prev) => prev.filter((cat) => cat.id !== id));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = (): FavouritesContextType => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
