import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import ScanScreen from "./screens/ScanScreen";

export default function App() {
  return (
    <View><AppContainer/></View>
  );
}

var AppNavigator = createSwitchNavigator({
  ScanScreen: ScanScreen,

});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
