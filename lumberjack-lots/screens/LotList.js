import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from 'react-native';
import { Header, Button, Icon } from 'react-native-elements'

import { StackNavigator } from 'react-navigation'

export default class LotList extends React.Component {
  constructor() {
    super();
    this.state = {
      lots: []
    };
  }



  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}
        onPress={ ()=> this.props.navigation.navigate('Lot' , item.car_count)}>
        <Image style={{ width: 80, height: 80, margin: 5 }}
          source={{ url: item.image}}/>
        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 5 }}>
          <Text style={{ fontSize: 18, color: 'black', marginBottom: 15 }}>
            { item.name }
          </Text>
          <Text style={{ fontSize: 16, color: 'gray' }}>
            Total Spaces: { item.total_spaces }
          </Text>
        </View>
      </TouchableOpacity>
      )
  }

  renderSeparator = () => {
    return(
      <View
        style={{ height: 1, width: '100%', backgroundColor: 'black' }}>
      </View>
    )
  }

  componentDidMount() {
    const url = 'https://wizards13467653673838292827.herokuapp.com/lots'
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        lots: responseJson.lot_array,
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }




  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd'}}>
        


        <Header
          leftComponent={
            <Icon onPress={()=>
              this.props.navigation.navigate('Home')}
              name='reply'
              color='white'
            />
          }
          centerComponent={{ text: 'Available Lots', style: { color: '#fff' } }}
          rightComponent={
            <Icon onPress={()=>
              this.props.navigation.navigate('About')}
              name='info'
              color='white'
            />
          }
          outerContainerStyles={{ backgroundColor: '#1B660F' }}
        />




        <FlatList
          data={ this.state.lots }
          renderItem={ this.renderItem }
          keyExtractor={ (item, index) => index }
          ItemSeparatorComponent={ this.renderSeparator }
        />



      </View>

    );
  }
}
