import React, { Component } from "react";
import { ExampleProfile } from "./Profile_Data";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  Button,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { styles } from "./ProfileStyles.js";
import { AirbnbRating } from "react-native-ratings";

const SQUARE = require("../../assets/ratings-icons/square.png");
const EMPTY_SQUARE = require("../../assets/ratings-icons/emptySquare.png");
const INVISIBLE_SQUARE = require("../../assets/ratings-icons/invisibleSquare.png");

export default function Profile() {
  // const Item = ({ title, img }) => (
  //   <View style={styles.item}>
  //     <Text style={styles.title}>{title}</Text>
  //     <Image style={styles.imageitem} source={img} />
  //   </View>
  // );

  // const renderItem = ({ item }) => (
  //   <>
  //     <Item title={item.title} img={item.img} />
  //   </>
  // );

  const GridView = ({ img }) => (
    <View style={styles.collectionGrid}>
      <Image style={styles.imgSize} source={img} />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* This will hold the Username, PFP, Follow and Message Button and Rating*/}
      <View style={styles.profileContainer}>
        {/* <Text style={styles.userName}>{ExampleProfile.userName}</Text> */}
        <Image style={styles.profilePicture} source={ExampleProfile.pfp.img} />
        <View>
          <Text style={styles.userName} > @user123 </Text>
        <Text style={styles.rating} > 4.7 Rating </Text>
        </View>
        {/* This area will take care of styling the buttons */}
        <View style={styles.buttonContainer}>
          <Pressable style={styles.messageButton}>
            <Text style={styles.messageText}>Message</Text>
          </Pressable>
        </View>
      </View>

      <View>
        <Text style={styles.urc} > Your Collection  </Text>
      </View>

      <FlatList
        data={ExampleProfile.collections}
        renderItem={({ item }) => <GridView img={item.img} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </ScrollView>
  );
}
