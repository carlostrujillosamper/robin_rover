import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Context from "../context/Context";

const StoreCard = ({ item }) => {
  const context = useContext(Context);
  const [display, setDisplay] = useState({ display: false });

  return (
    <TouchableOpacity
      onPress={() => {
        let toggleDisplay = !display;
        setDisplay(toggleDisplay);
      }}
    >
      {!display ? (
        <View style={styles.card}>
          <View style={styles.verticalLine}></View>
          <Text style={styles.cardText}>{item.name}</Text>
          <Text style={styles.cardText}>{item.category}</Text>
          <Text style={styles.cardText}>{item.id}</Text>
          <Text style={styles.cardText}>{item.domain}</Text>
          {context.favourites.some(
            (favItem) => JSON.stringify(favItem) == JSON.stringify(item)
          ) ? (
            <TouchableOpacity
              onPress={() => {
                context.toggleFavs(item);
              }}
              style={styles.icon}
            >
              <Ionicons name="heart-sharp" size={32} color="red" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                context.toggleFavs(item);
              }}
              style={styles.icon}
            >
              <Ionicons name="heart-sharp" size={32} color="grey" />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View style={styles.card}>
          <View style={styles.verticalLine}></View>

          <Text style={styles.cardText}>{item.name}</Text>
          <Text style={styles.cardText}>{item.category}</Text>
          {context.favourites.some(
            (favItem) => JSON.stringify(favItem) == JSON.stringify(item)
          ) ? (
            <TouchableOpacity
              onPress={() => {
                context.toggleFavs(item);
              }}
              style={styles.icon}
            >
              <Ionicons name="heart-sharp" size={32} color="red" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                context.toggleFavs(item);
              }}
              style={styles.icon}
            >
              <Ionicons name="heart-sharp" size={32} color="grey" />
            </TouchableOpacity>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#E3E3E3",
  },

  cardText: {
    marginTop: 10,
    marginLeft: 35,
    marginBottom: 10,
  },

  icon: {
    position: "absolute",
    left: 250,
    top: 10,
  },

  verticalLine: {
    position: "absolute",
    backgroundColor: "red",
    width: 5,
    height: "80%",
    left: 15,
    top: 5,
    borderRadius: 5,
  },
});

export default StoreCard;
