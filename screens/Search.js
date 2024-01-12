import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  DatePickerIOS
} from 'react-native';
import { Header } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import { db } from '../components/config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import App from '../App'





export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};

    // this.setDate = this.setDate(this);
    this.state = {
      domState: 'normal',
      hasCameraPermissions: null,
      scanned: false,
      
    };
  }

  getCameraPermissions = async domState => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
      /*status === "granted" is true when user has granted permission
          status === "granted" is false when user has not granted the permission
        */
      hasCameraPermissions: status === "granted",
      domState: domState,
      scanned: false
    });
  };

  handleBarCodeScanned = async ({ type, data }) => {
    const { domState } = this.state;

    if (domState === "prodId") {
      this.setState({
        prodId: data,
        domState: "normal",
        scanned: true,
        prodId, 
        active,
        exp,
        bran,
        quan
      });
    } 
  };
addProduct = async (activeI,expiry,brand,productId,qua) => {
    try {
        await addDoc(collection(db, 'tasks') ,{
            brandName: brand,
            // activeIngredient: activeI,
            created: Timestamp.now(),
            expiryDate:expiry,
            proId:productId,
            // quantity:qua
        })
        alert('Success')
    } catch (err) {
        alert(err)
    }
  }
    
   
   

    

  





  render() {
    const { domState, scanned, prodId, active, exp, bran, quan} = this.state;
    if (domState !== 'normal') {
      return (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      );
    }
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

        <Text style={styles.text}>Under Construction</Text>
        

        
   
        <View style={[styles.textinputContainer, { marginTop: 25 }]}>
              <TextInput
                style={styles.textinput}
                placeholder={"Search Medication e.g Panadol, Loxalate"}
                placeholderTextColor={"gray"}
              />
              <TouchableOpacity
                style={styles.scanbutton}
                 onPress={() => 
                    console.log('Surprise, its still not ready:)')
                }>
                <Text style={styles.scanbuttonText}>Go</Text>
              </TouchableOpacity>
            </View>

        

        
        

       
        


        
        
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  
  text: {
    color: 'pink',
    fontSize: 30,
  },

 

  header: {
    marginBottom: 100,
  },

  textInput: {
    borderRadius: 10,
    alignContent: 'center',
    borderColor: 'white',
    borderWidth: 3,
    width: '40%',
    height: 50,
    
  },
  

  buttonText: {
    color: 'white',
  },

  

 
 
  scanbutton2: {
    width: 100,
    height: 50,
    backgroundColor: '#9DFD24',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:500,
    marginBottom:600
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  appIcon: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 80
  },
  appName: {
    width: 80,
    height: 80,
    resizeMode: "contain"
  },
  lowerContainer: {
    flex: 0.5,
    alignItems: "center"
  },
  textinputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#9DFD24",
    borderColor: "#FFFFFF"
  },
  textinput: {
    width: "57%",
    height: 50,
    padding: 10,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#ADD8E6",
    color: "#FFFFFF"
  },
  scanbutton: {
    width: 100,
    height: 25,
    backgroundColor: "#9DFD24",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  scanbuttonText: {
    fontSize: 24,
    color: "#0A0101",
   
  }
});


