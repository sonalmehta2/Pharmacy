//CustomNavigation.js

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import NestedScreen from "./NestedScreen";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";

const Stack = createStackNavigator();  // creates object for Stack Navigator

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator >    // contains all child component screens within a stack. 
       <Stack.Screen
        name="Screen1"
        component={Screen1}
      />
       <Stack.Screen
        name="NestedScreen1"
        component={NestedScreen}
      />
    </Stack.Navigator>
  );
}

export {FirstScreenNavigator}; // Stack-Navigator for Screen 1 Tab

const SecondScreenNavigator = () => {
    return (
      <Stack.Navigator >
          <Stack.Screen
            name="Screen2"
            component={Screen2}
        />
         <Stack.Screen
          name="NestedScreen2"
          component={NestedScreen}
        />
      </Stack.Navigator>
    );
  }
  
  export {SecondScreenNavigator}; // Stack-Navigator for Screen 2 Tab

  