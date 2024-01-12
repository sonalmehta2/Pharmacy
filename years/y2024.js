import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";



const DropDown = () => {
    const [genderOpen, setGenderOpen] = useState(false);
      const [genderValue, setGenderValue] = useState(null);
      const [gender, setGender] = useState([
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
    
      ]);

      return (
        <View style={styles.dropdownGender}>
        <View style={styles.container}>
        <View style={styles.lowerContainer}>
          <View style={{ marginTop: 25 }}>
      <DropDownPicker
      style={styles.textinput}
      open={genderOpen}
      value={genderValue} //genderValue
      items={gender}
      setOpen={setGenderOpen}
      setValue={setGenderValue}
      setItems={setGender}
      placeholder="Select Month"
      
    />

  <TouchableOpacity style={styles.scanbutton}>
    <Text>Go</Text>
  </TouchableOpacity>
  </View>
  </View>
  </View>
    </View>
      )
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
        textinput: {
          width: "57%",
          height: 50,
          padding: 10,
          borderColor: "#FFFFFF",
          borderRadius: 10,
          borderWidth: 3,
          fontSize: 18,
          backgroundColor: "#Fbd3fb",
          fontFamily: "Rajdhani_600SemiBold",
          color: "#FFFFFF"
        },
        scanbutton: {
          width: 100,
          height: 50,
          backgroundColor: "#89CFF0",
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          justifyContent: "center",
          alignItems: "center"
        },
        
      
      });
  
      export default DropDown;