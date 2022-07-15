import React, { Component } from 'react';
import { ExampleProfile } from './Profile_Data';
import {
  StyleSheet,
  Text,
  View, Image, FlatList
} from 'react-native';

export default class Profile extends Component {
 

  render() {
    return (

      <View style={styles.container}>
       <Text> {ExampleProfile.userName} </Text>
       <Image  source={ExampleProfile.pfp.img} />
        { 
            console.log(ExampleProfile)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});