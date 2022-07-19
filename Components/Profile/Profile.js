import React, { Component } from "react";
import { ExampleProfile } from "./Profile_Data";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

export default function Profile() {
  const Item = ({ title, img }) => (
    <View style={stylesFeed.item}>
      <Text style={stylesFeed.title}>{title}</Text>
      <Image style={stylesFeed.imageitem} source={img} />
    </View>
  );

  const renderItem = ({ item }) => (
    <>
      <Item title={item.title} img={item.img} />
    </>
  );

  return (
    <View style={styles.container}>
      {/* <Text>
        {" "}
        style={styles.container}
        {ExampleProfile.userName}{" "}
      </Text> */}
      <Image style={styles.pfp} source={ExampleProfile.pfp.img} />
      {console.log(ExampleProfile)}
      <Text style={styles.headings}>Your collection</Text>
      <FlatList
        data={ExampleProfile.collections}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: "flex-start",
  },
  container: {
    padding: 5,
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderColor: "gray",
    marginVertical: 10,
  },
  pfp: {
    width: 150,
    height: 150,
    borderRadius: 200,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "black",
  },
  container: {
    backgroundColor: "grey",
    padding: "5%",
  },
  headings: {
    padding: "5%",
    fontSize: 25,
    color: "black",
    backgroundColor: "#f9c2ff",
    textAlign: "center",
  },
  itemselector: {
    backgroundColor: "grey",
    padding: "10%",
  },
  tradeImage: {
    width: "100%",
    hight: 200,
  },
});
const stylesFeed = StyleSheet.create({
  container: {
    // backgroundColor: "black",
    padding: "5%",
  },
  headings: {
    padding: "5%",
    fontSize: 25,
    // color: "Black",
    backgroundColor: "#f9c2ff",
    textAlign: "center",
  },
  itemselector: {
    backgroundColor: "grey",
    padding: "10%",
  },
  tradeImage: {
    width: "100%",
    hight: 200,
  },
  imageItem: {
    width: "50%",
    height: 100,
  },
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
