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
import * as Font from 'expo-font';
import * as Permissions from 'expo-permissions';
import  db  from '../components/config'
//mport { collection, addDoc, Timestamp } from 'firebase/firestore'






export default class ScanScreen extends Component {
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
    
   
    /* function to add new task to firestore */
    // addProduct = async () => {
       
    //     try {
    //         await addDoc(collection(db, 'products'), {
    //             BrandName: 'Panadol',
    //             activeIngredient: 'paracetamol',
    //             expiry: Timestamp.now()
    //         })
    //         alert('Success')
    //     } catch (err) {
    //         alert(err)
    //     }
    // }

    

  





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
      <ScrollView>
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
        

        
    
        <TextInput
          style={styles.textInput}
          placeholder={'Type Barcode'}
          placeholderTextColor={'gray'}
          onChangeText={text => this.setState({ prodId: text })}          
        />
        <TouchableOpacity
          style={styles.scanbutton}
         onPress={() => this.addProduct(active, exp, bran,prodId,quan)}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.scanbutton}
          onPress={() => this.getCameraPermissions()}>
          <Text style={styles.buttonText}>Scan</Text>
        </TouchableOpacity>

        
        

        <TextInput
          style={styles.textInput}
          placeholder={'Type Expiry'}
          placeholderTextColor={'gray'}
          onChangeText={text => this.setState({ exp: text })}
          keyboardType={'twitter'}
        />

        <TextInput
          style={styles.textInput}
          placeholder={'Type Active Ingredient'}
          placeholderTextColor={'gray'}
          onChangeText={text => this.setState({ active: text })}
          />

        <TextInput
          style={styles.textInput}
          placeholder={'Type Brand Name'}
          placeholderTextColor={'gray'}
          onChangeText={text => this.setState({ bran: text })}        
          />

        <TextInput
          style={styles.textInput}
          placeholder={'Type Quantity'}
          placeholderTextColor={'gray'}
          onChangeText={text => this.setState({ quan: text })}
          keyboardType={'number-pad'}        
          />



       
        
        
      </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5653D4',
  },
  text: {
    color: 'pink',
    fontSize: 30,
  },

  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },

  header: {
    marginBottom: 100,
  },
  textInput: {
    borderRadius: 10,
    alignContent: 'center',
    borderColor: 'white',
    borderWidth: 3,
    width: '57%',
    height: 50,
    marginLeft: 80,
    marginTop: 80,
    marginTop:50
  },
  button: {
    backgroundColor: '#89CFF0',
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    marginLeft: 1000,
    height: 50,
    
  },

  buttonText: {
    color: 'white',
  },

  orText: {
    marginLeft: 155,
    marginTop: 50,
  },

  button2: {
    backgroundColor: '#89CFF0',
    
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    
   
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
});

