import { useEffect, useState } from "react";

export default () => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavs = (store) => {
      if (favourites.find((foundStore) => store._id === foundStore._id)) {
        
      const updatedList = favourites.filter((foundStore) => store._id !== foundStore._id);
      console.log(updatedList)
      return setFavourites(updatedList);
    }
    setFavourites([...favourites, store]);
  };

  return [favourites, toggleFavs];
};
