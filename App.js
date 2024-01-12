import * as React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';

import y2023 from './years/y2023';
import y2024 from './years/y2024';
import y2025 from './years/y2025';
import y2026 from './years/y2026';
import y2027 from './years/y2027';
import AddItemScreen from './screens/AddItemScreen'
import AddCategoryScreen from './screens/AddCategoryScreen'
import Search from './screens/Search'
import Scan from "./screens/Scan"


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';






const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Categories}
      options={{
        title: 'Home',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </Stack.Navigator>
);


function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Go to Root" onPress={() => navigation.navigate('Root')} />
      <Button
        title="Go to Root, Profile"
        onPress={() => navigation.navigate('Root', { screen: 'Profile' })}
      />
    </View>
  );
}

function Categories({ navigation }) {
  return (
    <View style={styles.header}>
      <Header
        style={styles.header}
        backgroundColor={'#89CFF0'}
        centerComponent={{
          text: 'Pharmacy App',
          style: { color: '#fff', fontSize: 20 },
        }}
        />
    

      
    </View>
    
  );
  
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      
      <Drawer.Screen name="Years" component={HomeStack} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="AddItem" component={Scan} />
       <Drawer.Screen name="2023" component={y2023} />
      <Drawer.Screen name="2024" component={y2024} />
      <Drawer.Screen name="2025" component={y2025} />
       <Drawer.Screen name="2026" component={y2026} />
       <Drawer.Screen name="2027" component={y2027} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="AddItem" component={AddItemScreen} />
        <Stack.Screen name ="CheckExpiry" component={AddCategoryScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  header:{
    marginBottom:100,
  },
    scanbutton: {
    width: 100,
    height: 50,
    backgroundColor: '#9DFD24',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownGender: {
    marginHorizontal: 10,
    width: "50%",
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },

});

export default App;
