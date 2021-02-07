import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import useResults from "../hooks/useResults";
import Context from "../context/Context";

const StoreList = () => {
  const [searchApi, results, errorMessage] = useResults();
  const context = useContext(Context);
  return (
    <View
      style={{ marginTop: 100, justifyContent: "center", alignItems: "center" }}
    >
      <FlatList
        data={results}
        keyExtractor={(result) => result._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                context.toggleFavs(item);
              }}
            >
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
            </TouchableOpacity>
          );
        }}
        onEndReached={() => {
          searchApi(+results.length + 20);
        }}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default StoreList;
