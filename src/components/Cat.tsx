import React from "react";
import { useFavourites } from "../context/FavouritesContext";

interface Cat {
  id: string;
  url: string;
}

interface CatProps {
  cat: Cat;
}

const CatItem: React.FC<CatProps> = ({ cat }) => {
  const { favourites, addFavourite, removeFavourite } = useFavourites();
  const isFavourite = favourites.some((fav) => fav.id === cat.id);

  const handleFavouriteClick = () => {
    if (isFavourite) {
      removeFavourite(cat.id);
    } else {
      addFavourite(cat);
    }
  };

  return (
    <div className="cat-item">
    <img src={cat.url} alt="Cat" />
    <button
      className={isFavourite ? "clicked" : ""}
      onClick={handleFavouriteClick}
    >
    </button>
  </div>
  );
};

export default CatItem;
