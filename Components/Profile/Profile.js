import React, { Component } from "react";
import { ExampleProfile } from "./Profile_Data";
import { StyleSheet, Text, View, Image, FlatList, Pressable, Button} from "react-native";

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
    <View style={{backgroundColor: "#084F6D"}} >
      <Pressable style={styles.button} >
      <View style = {{backgroundColor: '#81C8E7', borderRadius: 50,}}>
        <Text style={styles.text} > @user123 </Text>
      </View>
      </Pressable >
      <View style={styles.Container1}>
      <Image style={styles.pfp} source={ExampleProfile.pfp.img} />
      {console.log(ExampleProfile)}
      </View>
      <View style={{ flexDirection:"row", justifyContent: "center", alignItems: "center",}}>
    <Pressable style={styles.text}>
        <Text>  Follow</Text>
    </Pressable>
    <Pressable style={styles.text}>
        <Text> Messege</Text>
    </Pressable>
</View>
<View style={{ backgroundColor: "black"}} >
<Image resizeMode = 'strech' style = {{width: 300, position : 'center', backgroundColor: "black", marginLeft:50, marginTop : 10}} source={ require("../../assets/5card.png")} />
</View>
      <Text style={styles.headings}>Your collection</Text>
      <FlatList
        style={styles.miniFeed}
        data={ExampleProfile.collections}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  miniFeed: {
 
  },
  Container1: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: "grey",
    padding: "5%",
  },
  headings: {
    padding: "5%",
    fontSize: 25,
    color: "black",
    backgroundColor: "#81C8E7",
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
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
