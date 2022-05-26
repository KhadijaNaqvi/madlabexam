import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import database from "@react-native-firebase/database";
let itemsRef = database().ref("/university-listing-data-new/").push();
export default class UniversityData extends Component {
    
   state = {
      name: "",
      fee: '',
      ranking: '',
      marit: 0,
      location:'',
   }
  
   createUsers(){
    //console.log('Auto generated key: ', itemsRef.key);
    database().ref("/university-listing-data-new/").push().
    set({
      name: this.state.name,
      fee: this.state.fee,
      ranking: this.state.ranking,
      marit: this.state.marit,
      location: this.state.location,
    }
  ).then(() => {console.log("success")}).catch(() => {console.log("error")})};
 
   
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "University Name"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText={(val) => this.setState({name: val})}
               />
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "ranking"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText={(val) => this.setState({ranking: val})}
             />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "fee"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText={(val) => this.setState({fee: val})}/>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "marit"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText={(val) => this.setState({marit: val})}/>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "location"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText={(val) => this.setState({location: val})}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {() => {this.createUsers()}}
              >
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}


const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 30,
      height: 30,
      borderColor: 'black',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: 'black',
      padding: 10,
      margin: 30,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
      
   }
})