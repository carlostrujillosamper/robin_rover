import React from "react";
import Context from "./Context";
import useFavourites from "../hooks/useFavourites";

const GlobalState = (props) => {
  const [favourites, toggleFavs] = useFavourites();
  return (
    <Context.Provider value = {{
        favourites,
        toggleFavs
    }}>
        {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
