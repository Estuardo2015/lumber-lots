import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
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
      <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}
        onPress={ ()=> this.props.navigation.navigate('LotList' , {name: item.name })}>
        <Image style={{ width: 80, height: 80, margin: 5 }}
          source={{ url: item.image}}/>
        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 5 }}>
          <Text style={{ fontSize: 18, color: 'black', marginBottom: 15 }}>
            { item.nickname }
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
      <View style={{ flex: 1, backgroundColor: '#ddd'}}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}

          centerComponent={{ text: 'Lumberjack Lots', style: { color: '#fff' } }}
          
          rightComponent={
            <Icon onPress={()=>
              this.props.navigation.navigate('About')}
              name='info'
              color='white'
            />
          }

          outerContainerStyles={{ backgroundColor: '#3E9231' }}
        />

        <FlatList
          data={ this.state.schools }
          renderItem={ this.renderItem }
          keyExtractor={ (item, index) => index }
          ItemSeparatorComponent={ this.renderSeparator }
        />



      </View>

    );
  }
}

