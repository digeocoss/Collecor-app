import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView, FlatList } from "react-native";
import { styles } from "./FeedStyles";



const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bw",
    title: "Chain saw man manga",
    img: require("../../assets/chain-example.jpeg"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97fw3",
    title: "Arcius Pokemom card",
    img: require("../../assets/ex2.jpeg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29ed72",
    title: "Law figure",
    img: require("../../assets/ex3.jpeg"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aeed5-3ad53abb28ba",
    title: "Tangiro Fuigure",
    img: require("../../assets/ex4.jpeg"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-r3ad53abb28ba",
    title: "Tamaki fuigure",
    img: require("../../assets/ex5.jpeg"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-w3ad53abb28ba",
    title: "JoJos Bizzar adventure Golden Wind VOL.1 manga",
    img: require("../../assets/ex6.jpeg"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-e3ad53abb28ba",
    title: "7 Item",
    img: require("../../assets/chain-example.jpeg"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ard53abb28ba",
    title: "8 Item",
    img: require("../../assets/chain-example.jpeg"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53atbb28ba",
    title: "9 Item",
    img: require("../../assets/chain-example.jpeg"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53qabb28ba",
    title: "10 Item",
    img: require("../../assets/chain-example.jpeg"),
  },
];

const Item = ({ title, img }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image style={styles.imageitem} source={img} />
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <>
      <Item title={item.title} img={item.img} />
    </>
  );

  return (
   <SafeAreaView style={styles.container}>
        <Text style={styles.headings}> Brows Collection </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default App;
