import React, { useContext } from "react";
import {
  View,
  FlatList,
} from "react-native";
import useResults from "../hooks/useResults";
import Context from "../context/Context";
import StoreCard from "../components/StoreCard";

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
              <StoreCard item = {item}></StoreCard>
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
