import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import useResults from "../hooks/useResults";

const StoreList = () => {
  const [searchApi, results, errorMessage] = useResults();
  console.log(results.length);
  return (
    <View
      style={{ marginTop: 100, justifyContent: "center", alignItems: "center" }}
    >
      <FlatList
        data={results}
        keyExtractor={(result) => result._id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 1,
                margin: 10,
                width: 80,
              }}
            >
              <Text>{item.name}</Text>
            </View>
          );
        }}
        onEndReached={()=>{
            searchApi(+results.length + 20)
        }}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default StoreList;
