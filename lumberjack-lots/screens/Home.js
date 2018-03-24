import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'


export default class Home extends React.Component {
  render() {
    return (

      <View style={{ flex: 1, backgroundColor: '#ddd'}}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Lumberjack Lots', style: { color: '#fff' } }}
          rightComponent={{ icon: 'info', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: '#1B660F' }}
        />
        <Button onPress={()=>
          this.props.navigation.navigate('LotList')}
          title='Humboldt State University'
        />
      </View>

    );
  }
}

