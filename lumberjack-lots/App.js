import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'

import Home from './screens/Home'
import LotList from './screens/LotList'
import Lot from './screens/Lot'
import About from './screens/About'


export default class App extends React.Component {
  render() {
    return (

      <AppNavigator />

    );
  }
}

const AppNavigator = StackNavigator({
  Home: { screen : Home},
  LotList: { screen : LotList},
  Lot: { screen : Lot},
  About: { screen : About }
}, {
    headerMode: 'none',
})
