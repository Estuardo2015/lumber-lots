import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from 'react-native';
import { Header, Button, Icon } from 'react-native-elements'

import { StackNavigator } from 'react-navigation'

export default class LotList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lots: [],
      name: this.props.navigation.state.params.name
    };
  }



  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}
        onPress={ ()=> this.props.navigation.navigate('Lot' , {name: this.state.name, car_count: item.car_count, total_spaces: item.total_spaces})}>
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
    const url = 'https://wizards13467653673838292827.herokuapp.com/get_lots/' + this.state.name
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        lots: responseJson.lots,
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
          outerContainerStyles={{ backgroundColor: '#3E9231' }}
        />

        <Text style={{ fontSize: 18, color: 'black', marginBottom: 15 }}>
          { this.name }
        </Text>



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
