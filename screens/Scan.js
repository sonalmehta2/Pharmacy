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
import { BarCodeScanner } from 'expo-barcode-scanner';
import db from '../components/config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import DropDownPicker from "react-native-dropdown-picker";






export default class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {chosenDate: new Date()};

    // this.setDate = this.setDate(this);
    this.state = {
      domState: 'normal',
      hasCameraPermissions: null,
      scanned: false,
      2022:false,
      dropDownHeight:40
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

  handleBarCodeScanned = async ({data}) => {
    const { domState } = this.state;
    
      if (domState === "prodId") {
        this.setState({
          prodId: data,  // Corrected property name
          domState: "normal",
          scanned: true
          // prodId, 
          // active,
          // exp,
          // bran,
          // quan
      });
     
  }
  };
  addProduct = async (activeI,brand,productId,qua,expyea) => {
    try{
        await db.collection('tasks').add({
            brandName: brand,
            activeIngredient: activeI,
            //created: Timestamp.now(),
            proId:productId,
            quantity:qua,
            // expiryMonth:expmon,
            expiryYear:expyea
        })
        alert("added")
      }
     catch (err) {
        alert(err)
    }
  }
    
   
   

    

  





  render() {
    const { domState, scanned, prodId, active, bran, quan,expMon,expYea} = this.state;
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
         <ScrollView> 
        
        

        
    
        <TextInput
          style={styles.textInput}
          placeholder={'Type Barcode'}
          placeholderTextColor={'gray'}
          onChangeText={text => this.setState({ prodId: text })}  
          value = {prodId}        
        />

<TouchableOpacity
        style={styles.scanbutton}
        onPress={() => this.getCameraPermissions("prodId")}
        >
        <Text style={styles.buttonText}>Scan</Text>
      </TouchableOpacity> 
        

       

        
        {/* <DropDownPicker
          items = {[
          { label: "January", value: "jan" },
          { label: "Febuary", value: "feb" },
          { label: "March", value: "mar" },
          { label: "April", value: "apr" },
          { label: "May", value: "may" },
          { label: "June", value: "jun" },
          { label: "July", value: "jul" },
          { label: "August", value: "aug" },
          { label: "September", value: "sep" },
          { label: "October", value: "oct" },
          { label: "November", value: "nov" },
          { label: "December", value: "dec" },
        ]}
        open = {this.state.dropDownHeight == 170 ? true : false}
        onOpen = {()=>this.setState({dropDownHeight:170})}
        onClose = {()=>this.setState({dropDownHeight:40})}
        onSelectItem = {item=>this.setState({expMon:item.value})}
        />
        

        <DropDownPicker
          items = {[
          { label: "January", value: "jan" },
          { label: "Febuary", value: "feb" },
          { label: "March", value: "mar" },
          { label: "April", value: "apr" },
          { label: "May", value: "may" },
          { label: "June", value: "jun" },
          { label: "July", value: "jul" },
          { label: "August", value: "aug" },
          { label: "September", value: "sep" },
          { label: "October", value: "oct" },
          { label: "November", value: "nov" },
          { label: "December", value: "dec" },
        ]}
        open = {this.state.dropDownHeight == 170 ? true : false}
        onOpen = {()=>this.setState({dropDownHeight:170})}
        onClose = {()=>this.setState({dropDownHeight:40})}
        onSelectItem = {item=>this.setState({expMon:item.value})}
        /> */}

        <TextInput
          style={styles.textInput}
          placeholder={'Type Year'}
          placeholderTextColor={'gray'}
          onChangeText={text => this.setState({ expYea: text })}
          
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
                 
          />

        <TouchableOpacity
          style={styles.scanbutton}
          onPress={() => this.addProduct(active, bran,prodId,quan,expYea)}
        >
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>

        

       



        
        
        
      
       </ScrollView> 
      </View>
      
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
    marginLeft: 140,
    marginTop: 25,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});