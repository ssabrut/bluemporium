import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  const [loggedIn, setLoggedIn] = useState(0);

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      barStyle={{
        height: 64,
        backgroundColor: "#fff",
        borderTopWidth: 0.2,
        borderTopColor: "#aaa",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: "0%",
      }}
      activeColor="#0314AC"
      inactiveColor="#525252"
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Image style={{ width: 24, height: 24, tintColor: focused ? "#004AA4" : "#999" }} resizeMode="contain" source={focused ? require("../assets/icons/home-fill.png") : require("../assets/icons/home.png")} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Image style={{ width: 24, height: 24, tintColor: focused ? "#004AA4" : "#999" }} resizeMode="contain" source={focused ? require("../assets/icons/cart-fill.png") : require("../assets/icons/cart.png")} />
            </View>
          ),
        }}
      />
      {loggedIn == 0 ? (
        <Tab.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            tabBarLabel: "Login",
            tabBarIcon: ({ focused }) => (
              <View style={styles.container}>
                <Image style={{ width: 24, height: 24, tintColor: focused ? "#004AA4" : "#999" }} resizeMode="contain" source={require("../assets/icons/login.png")} />
              </View>
            ),
          }}
        />
      ) : null}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
