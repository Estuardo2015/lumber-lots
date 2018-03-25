import React from 'react';
import { TouchableOpacity, RefreshControl, StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from 'react-native';
import { Header, Button, Icon } from 'react-native-elements'

import { StackNavigator } from 'react-navigation'

export default class LotList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lots: [],
      name: this.props.navigation.state.params.name,
      nickname: this.props.navigation.state.params.nickname,
      color: this.props.navigation.state.params.color,
    };
  }



  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ flex: 1, flexDirection: 'row', 
          borderRadius: 4, 
          borderBottomWidth: 1,
          borderBottomColor: '#d6d7da', }}
        onPress={ ()=> this.props.navigation.navigate('Lot' , {name: this.state.name, car_count: item.car_count, total_spaces: item.total_spaces, lot_name: item.name, color: this.state.color, nickname: this.state.nickname})}>
        <Image style={{ width: 80, height: 80, margin: 5 }}
          source={{ url: 'https://s3.us-east-2.amazonaws.com/lumberlots/' + item.name + '.jpg'}}/>
        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 5 }}>
          <Text style={{ fontSize: 18, color: 'black', marginBottom: 10 }}>
            { item.name }
          </Text>
          <Text style={{ fontSize: 16, color: 'gray' }}>
            Total Spaces: { item.total_spaces }
          </Text>
          <Text style={{ fontSize: 16, color: 'gray' }}>
            Cars: { item.car_count }
          </Text>
        </View>
        <View style={{ marginTop: 35 }}>
          <Icon
            name='chevron-right'
            color='gray'
          />
        </View>
      </TouchableOpacity>
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
      <View style={{ flex: 1, backgroundColor: '#ECEFF1'}}>

        <Header
          leftComponent={
            <Icon onPress={()=>
              this.props.navigation.navigate('Home')}
              name='reply'
              color='white'
            />
          }
          centerComponent={{ text: this.state.nickname, style: { color: '#fff' } }}
          rightComponent={
            <Icon onPress={()=>
              this.props.navigation.navigate('About')}
              name='info'
              color='white'
            />
          }
          outerContainerStyles={{ backgroundColor: this.state.color }}
        />

        <FlatList
          data={ this.state.lots }
          renderItem={ this.renderItem }
          keyExtractor={ (item, index) => index }
        />

      </View>

    );
  }
}
