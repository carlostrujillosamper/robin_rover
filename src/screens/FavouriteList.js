import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Context from "../context/Context";
import StoreCard from "../components/StoreCard";


const FavouriteList = () => {
  const context = useContext(Context);

  return (
    <View
      style={{ marginTop: 100, justifyContent: "center", alignItems: "center" }}
    >
      <FlatList
        data={context.favourites}
        keyExtractor={(favourite) => favourite._id}
        renderItem={({ item }) => {
          return (
              <StoreCard item={item}></StoreCard>
          );
        }}
       
      />
    </View>
  );
};

export default FavouriteList;
