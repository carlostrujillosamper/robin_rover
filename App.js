import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StoreList from "./src/screens/StoreList";
import FavouriteList from "./src/screens/FavouriteList";
import GlobalState from "./src/context/GlobalState";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GlobalState>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let iconColor;

              if (route.name === "Stores") {
                iconName = "list";
                iconColor = focused ? "red" : "grey";
              } else if (route.name === "FavouriteList") {
                iconName = "heart-sharp";
                iconColor = focused ? "red" : "grey";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={iconColor}  />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
            showLabel: false
          }}
        >
          <Tab.Screen name="Stores" component={StoreList} />
          <Tab.Screen name="FavouriteList" component={FavouriteList} />
        </Tab.Navigator>
      </NavigationContainer>
    </GlobalState>
  );
}
