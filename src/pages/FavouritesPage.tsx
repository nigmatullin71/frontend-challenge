import React from "react";
import CatItem from "../components/Cat";

import { useFavourites } from "../context/FavouritesContext";

const FavouritesPage: React.FC = () => {
  const { favourites } = useFavourites();

  return (
    <div>

        <div className="cat-list">
          {favourites.map((cat) => (
            <CatItem key={cat.id} cat={cat} />
          ))}
        </div>

    </div>
  );
};

export default FavouritesPage;
