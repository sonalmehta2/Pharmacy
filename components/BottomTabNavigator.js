import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { NavigationContainer } from '@react-navigation/native';


import Categories from "../screens/Categories";


import Search from "../screens/Search";


const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Categories") {
            iconName = focused ? "albums" : "albums-outline";
          }
          
          else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(25)}
              color={color}
              style={styles.icons}
            />
          );
        }
      })}
      activeColor={'#89CFF0'}
      inactiveColor={"gray"}
    >
      <Tab.Screen name="Categories" component={Categories} />
      
      <Tab.Screen name="Search" component={Search} />
      
    </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "white",
    height: "8%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default BottomTabNavigator;
