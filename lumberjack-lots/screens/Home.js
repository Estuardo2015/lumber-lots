import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Header, Button, Icon } from 'react-native-elements'

import { StackNavigator } from 'react-navigation'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: []
    };
  }



  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ flex: 1, flexDirection: 'row',
        borderRadius: 4, 
        borderBottomWidth: 1,
        borderBottomColor: '#d6d7da',}}
        onPress={ ()=> this.props.navigation.navigate('LotList' , {name: item.name, color: item.color, nickname: item.nickname})}>
        <Image style={{ width: 80, height: 80, margin: 5 }}
          source={{ url: 'https://s3.us-east-2.amazonaws.com/lumberlots/' + item.name + '.jpg'}}/>
        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 5 }}>
          <Text style={{ fontSize: 18, color: 'black'}}>
            { item.nickname }
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
    const url = 'https://wizards13467653673838292827.herokuapp.com/schools'
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        schools: responseJson.schools,
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
          centerComponent={{ text: 'Lumberjack Lots', style: { color: '#fff' } }}
          
          rightComponent={
            <Icon onPress={()=>
              this.props.navigation.navigate('About')}
              name='info'
              color='white'
            />
          }

          outerContainerStyles={{ backgroundColor: '#3E4C5E' }}
        />

        <FlatList
          data={ this.state.schools }
          renderItem={ this.renderItem }
          keyExtractor={ (item, index) => index }
        />



      </View>

    );
  }
}

