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
            <View
              style={{
                flex: 1,
                margin: 10,
                width: 300,
                borderLeftColor: "red",
                borderRadius: 5,

                backgroundColor: "grey",
              }}
            >
              <Text>{item.name}</Text>
              <Text>{item.category}</Text>
            </View>
          );
        }}
       
      />
    </View>
  );
};

export default FavouriteList;
