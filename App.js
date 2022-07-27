import * as React from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, Fontisto } from "@expo/vector-icons";
import CameraUse from "./Components/Camera/Camera.js";
import Profile from "./Components/Profile/Profile.js";
import Feed from "./Components/Feed/Feed.js";
import Trades from "./Components/Trades/Trades.js";
import Buy from "./Components/Buy/Buy.js";
import SinglePage from "./Components/SinglePage/SinglePage.js";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Camera"
        options={{
          tabBarIcon: () => <Entypo name="camera" size={24} color="black" />,
          header: () => null,
        }}
        component={CameraUse}
      />
      <Tab.Screen
        name="Feed"
        options={{
          tabBarIcon: () => (
            <Fontisto name="spinner-refresh" size={24} color="black" />
          ),
          header: () => null,
        }}
        component={Feed}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="home" size={24} color="black" />
          ),
          header: () => null,
        }}
        component={Profile}
      />
      {/* <Tab.Screen name="Trade" component={Trades} />
      <Tab.Screen name="Buy" component={Buy} /> */}
      <Tab.Screen name="SinglePage" component={SinglePage} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
