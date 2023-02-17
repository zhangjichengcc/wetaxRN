import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/HomeScreen";
import ProfileScreen from "../pages/ProfileScreen";
import DetailsScreen from "../pages/DetailsScreen";

const Tab = createBottomTabNavigator();

const TabScreen: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "orange",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "首页", tabBarLabel: "首页" }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "我的", tabBarLabel: "我的" }}
      />
    </Tab.Navigator>
  );
};

export default TabScreen;
