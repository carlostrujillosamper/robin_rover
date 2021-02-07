import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";


const saveFavsLocal = async (favourites) => {
  try {
    await AsyncStorage.setItem("@MySuperStore:key", JSON.stringify(favourites));
  } catch (error) {
    console.log("error");
  }
};

const fetchSavedFavs = async (setFavourites, favourites) => {
  try {
    const myArray = await AsyncStorage.getItem("@MySuperStore:key");
    if (myArray !== null) {
      setFavourites([...JSON.parse(myArray)]);
    }
  } catch (error) {
    console.log(error);
  }
};

export default () => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavs = (store) => {
    if (favourites.find((foundStore) => store._id === foundStore._id)) {
      const updatedList = favourites.filter(
        (foundStore) => store._id !== foundStore._id
      );
      console.log(updatedList);
      saveFavsLocal(updatedList);
      return setFavourites(updatedList);
    }
    saveFavsLocal([...favourites, store]);
    setFavourites([...favourites, store]);
  };

  useEffect(() => {
    fetchSavedFavs(setFavourites, favourites);
  }, []);

  return [favourites, toggleFavs];
};
