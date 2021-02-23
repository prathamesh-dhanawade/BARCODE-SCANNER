import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';


export default class ScanScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            hasCameraPerMissions : nulls,
            scanned: false,
            scannedData:'',
            buttonState: 'normal'
        }
    }
render(){
  return(

    <TouchableOpacity
    onPress={this.getCameraPermissions}
    style={styles.scanButton}
    title="Bar Code Scanner">
      <Text style={styles.buttonText}>Scan the Code</Text>
    </TouchableOpacity>
  )
  }
}

getCameraPermissions = async id => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
      /*status === "granted" is true when user has granted permission
          status === "granted" is false when user has not granted the permission
        */
      hasCameraPermissions: status === "granted",
      buttonState: id,
      scanned: false
    });
  };



  handleBarCodeScanned = async ({ type, data }) => {
    const { buttonState } = this.state;

    if (buttonState === "BookId") {
      this.setState({
        scanned: true,
        scannedBookId: data,
        buttonState: "normal"
      });
    } else if (buttonState === "StudentId") {
      this.setState({
        scanned: true,
        scannedStudentId: data,
        buttonState: "normal"
      });
    }
  };
