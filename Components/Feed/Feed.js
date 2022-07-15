import React, { Component } from 'react';
import {StyleSheet, Text, View, Image}from 'react-native';
import { SafeAreaView, FlatList, StatusBar } from 'react-native';
 
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Chain saw man manga',
    img: require("../../assets/chain-example.jpeg"),

  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Arcius Pokemom card',
    img: require("../../assets/ex2.jpeg"),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Law figure',
    img: require("../../assets/ex3.jpeg"),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Tangiro Fuigure',
    img: require("../../assets/ex4.jpeg"),

  },{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Tamaki fuigure',
    img: require("../../assets/ex5.jpeg"),

  },{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'JoJos Bizzar adventure Golden Wind VOL.1 manga',
    img: require("../../assets/ex6.jpeg"),

  },{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '7 Item',
    img: require("../../assets/chain-example.jpeg"),

  },{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '8 Item',
    img: require("../../assets/chain-example.jpeg"),

  },{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '9 Item',
    img: require("../../assets/chain-example.jpeg"),

  },{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '10 Item',
    img: require("../../assets/chain-example.jpeg"),

  },
];


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <>
        <Item title={item.title} />
        <Image source={ item.img } />
    </>

  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;