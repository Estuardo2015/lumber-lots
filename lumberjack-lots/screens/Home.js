import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Header, Button, Icon } from 'react-native-elements'

import { StackNavigator } from 'react-navigation'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      isLoading: true
    };
  }



  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}
        onPress={ ()=> this.props.navigation.navigate('LotList' , {name: item.name })}>
        <Image style={{ width: 80, height: 80, margin: 5 }}
          source={{ url: item.image}}/>
        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 5 }}>
          <Text style={{ fontSize: 18, color: 'black'}}>
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
        isLoading: false
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      this.state.isLoading
      ?
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size= "large" color="#330066" animating />
      </View>
      :
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

          outerContainerStyles={{ backgroundColor: '#558B2F' }}
        />

        <FlatList
          ItemSeparatorComponent={ this.renderSeparator }
          data={ this.state.schools }
          renderItem={ this.renderItem }
          keyExtractor={ (item, index) => index }
          ItemSeparatorComponent={ this.renderSeparator }
        />



      </View>

    );
  }
}

