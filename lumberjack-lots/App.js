import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements'


export default class App extends React.Component {
  render() {
    return (

      <View style={{ flex: 1, backgroundColor: '#ddd'}}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Lumberjack Lots', style: { color: '#fff' } }}
          rightComponent={{ icon: 'info', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: '#1B660F' }}
        />
      </View>

    );
  }
}
