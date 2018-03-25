import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button, Icon, PricingCard, Divider } from 'react-native-elements'

import { StackNavigator } from 'react-navigation'

export default class Lot extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      name: this.props.navigation.state.params.name,
      car_count: this.props.navigation.state.params.car_count,
      nickname: this.props.navigation.state.params.nickname,
      total_spaces: this.props.navigation.state.params.total_spaces,
      lot_name: this.props.navigation.state.params.lot_name,
      color: this.props.navigation.state.params.color
    };
  }

  render() {
    return (

      <View style={{ flex: 1, backgroundColor: '#ECEFF1'}}>
        <Header
          leftComponent={
            <Icon onPress={()=>
              this.props.navigation.navigate('LotList', {name: this.state.name, color: this.state.color, nickname: this.state.nickname})}
              name='reply'
              color='white'
            />
          }
          centerComponent={{ text: this.state.lot_name, style: { color: '#fff' } }}
          rightComponent={
            <Icon onPress={()=>
              this.props.navigation.navigate('About')}
              name='info'
              color='white'
            />
          }
          outerContainerStyles={{ backgroundColor: this.state.color }}
        />

        <PricingCard
          color='#3E4C5E'
          title='Current Spaces:'
          price={this.state.car_count} 
          info={[this.state.lot_name]}
          button={{ title: 'Refresh', icon: 'refresh' }}
        />

      </View>

    );
  }
}
