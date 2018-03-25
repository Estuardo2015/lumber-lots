import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, Icon } from 'react-native-elements'

import { StackNavigator } from 'react-navigation'

export default class Lot extends React.Component {
  render() {
    return (

      <View style={{ flex: 1, backgroundColor: '#ECEFF1'}}>
        <Header
          leftComponent={
            <Icon onPress={()=>
              this.props.navigation.navigate('Home')}
              name='home'
              color='white'
            />
          }
          centerComponent={{ text: 'Info', style: { color: '#fff' } }}
          outerContainerStyles={{ backgroundColor: '#3E4C5E' }}
        />
        <Text style={{ textAlign: 'center', margin: 15 }}>
          Made with love by Wizards
        </Text>
        <Text style={{ textAlign: 'center', margin: 10 }}>
          For Humboldt State Univerity 2018 Hackathon
        </Text>

      </View>

    );
  }
}
