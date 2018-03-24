import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, Icon } from 'react-native-elements'

import { StackNavigator } from 'react-navigation'

export default class Lot extends React.Component {
  render() {
    return (

      <View style={{ flex: 1, backgroundColor: '#ddd'}}>
        <Header
          leftComponent={
            <Icon onPress={()=>
              this.props.navigation.navigate('Home')}
              name='home'
              color='white'
            />
          }
          centerComponent={{ text: 'Info', style: { color: '#fff' } }}
          outerContainerStyles={{ backgroundColor: '#1B660F' }}
        />
        <Text style={{ textAlign: 'center' }}>
          Made with love by the Wizards
        </Text>
        
      </View>

    );
  }
}
