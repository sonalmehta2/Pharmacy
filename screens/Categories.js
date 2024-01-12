import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import {Header} from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddItemScreen from "./AddItemScreen"





export default class CategoriesScreen extends Component {
  constructor(props) {
    super(props);   
  }

  render() {
    return (
      
      <View style={styles.header}>

        <Stack.Navigator>
          <Stack.Screen name="AddItemScreen" component={AddItemScreen} />
        </Stack.Navigator>

        <Header
          style={styles.header}
          backgroundColor={'#89CFF0'}
          centerComponent={{
            text: 'Pharmacy App',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <Text style={styles.text}>Under Construction</Text>
        
        <TouchableOpacity
          style={styles.scanbutton}
          onPress={() => {
            try {
              console.log('before')
              this.props.navigation.navigate('AddItemScreen');
              console.log('after')
            } catch (error) {
              console.log('Error navigating to AddItemScreen:', error);
            }
          }}
          >
          <Text>Go to MyScreen</Text>
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>


         <TouchableOpacity
          style={styles.scanbutton}
          onPress={() => {
            try {
              console.log('before')
              this.props.navigation.navigate('AddItemScreen');
              console.log('after')
            } catch (error) {
              console.log('Error navigating to AddItemScreen:', error);
            }
          }}
          >
          <Text style={styles.buttonText}>Check Expiry</Text>
        </TouchableOpacity> 

      </View>
    );
        }
}









const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "orange",
    fontSize: 30
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft:95,
  },
  header:{
    marginBottom:100,
  },
  button: {
    width:(300),
    height:(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius:(10),
    backgroundColor: "white"
  },
  button2: {
    width:(300),
    height:(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius:(10),
    backgroundColor: "white",
    marginTop:20
  },
  scanbutton: {
    width: 200,
    height: 50,
    backgroundColor: '#5653D4',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30
  },
  buttonText: {
    color: 'white',
  },
});

import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import {Header} from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddItemScreen from "./AddItemScreen"



const handlePress = () => {
  navigation.navigate('Search');
};
const Stack = createNativeStackNavigator();


// export default class CategoriesScreen extends Component {
//   constructor(props) {
//     super(props);
   
//   }

  
  
  

//   render() {

      
//     return (
      
      
    
//      <View style={styles.header}>
       
       
//       <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="AddItemScreen" component={AddItemScreen} />
//       </Stack.Navigator>
//       </NavigationContainer>
    

//        <Header
//           style={styles.header}
//           backgroundColor={'#89CFF0'}
//           centerComponent={{
//             text: 'Pharmacy App',
//             style: { color: '#fff', fontSize: 20 },
//           }}
//           />
//     <Text style={styles.text}>Under Construction</Text>
    
//         <TouchableOpacity
//           style={styles.scanbutton}
//           onPress={() => this.props.navigation.navigate('AddItemScreen')}>
//         <Text>Go to MyScreen</Text>
//           <Text style={styles.buttonText}>Add Product</Text>
//         </TouchableOpacity>
        

//         <TouchableOpacity
//           style={styles.scanbutton}
//           onPress={() => this.props.navigation.navigate("AddItemScreen")}
//           >
//           <Text style={styles.buttonText}>Check Expiry</Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//         onPress={handlePress}>
//         <Text>Go to MyScreen</Text>
//         </TouchableOpacity>
    
      
          
//       </View>
      
      
      
      
//     );
//   }
// }




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#5653D4"
//   },
//   text: {
//     color: "orange",
//     fontSize: 30
    
//   },

//     imageIcon: {
//     width: 150,
//     height: 150,
//     marginLeft:95,
//   },

//   header:{
//     marginBottom:100,

//   },
//   button: {
//     width:(300),
//     height:(50),
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//     borderRadius:(10),
//     backgroundColor: "white"
//   },

//   button2: {
//     width:(300),
//     height:(50),
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//     borderRadius:(10),
//     backgroundColor: "white",
//     marginTop:20
//   },
//   scanbutton: {
//     width: 200,
//     height: 50,
//     backgroundColor: '#5653D4',
//     borderTopRightRadius: 10,
//     borderBottomRightRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop:30
//   },
//   buttonText: {
//     color: 'white',
//   },

  
// });

