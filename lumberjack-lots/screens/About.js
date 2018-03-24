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
          outerContainerStyles={{ backgroundColor: '#3E9231' }}
        />
        <Text style={{ textAlign: 'center', margin: 15 }}>
          Made with love by the Wizards
        </Text>
        <Text style={{ textAlign: 'center', margin: 10 }}>
          For Humboldt State Univerity 2018 Hackathon
        </Text>
        
      </View>

    );
  }
}
