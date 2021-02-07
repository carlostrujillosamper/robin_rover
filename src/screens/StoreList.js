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
  console.log(results)
  return (
    <View>
      
      <FlatList
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 1,
              }}
            >
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default StoreList;
