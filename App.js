import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StoreList from "./src/screens/StoreList";
import FavouriteList from "./src/screens/FavouriteList";
import TabBar from "./src/components/TabBar";
import GlobalState from "./src/context/GlobalState";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GlobalState>
      <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
          <Tab.Screen name="Stores" component={StoreList} />
          <Tab.Screen name="Favourites" component={FavouriteList} />
        </Tab.Navigator>
      </NavigationContainer>
    </GlobalState>
  );
}
