import {
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ExampleProfile } from "../../Data/Profile_Data";
import { styles } from "./ProfileStyles.js";

export default function Profile() {
  const GridView = (item) => (
    <View key={item.id}>
      <View style={styles.row}>
        <Image style={styles.imgSize} source={item.img} />
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.iconHeader}>
        <Pressable
          onPress={() => {
            console.log("open settings");
          }}
        >
          <Ionicons name="cog" size={50} color="white" />
        </Pressable>
        <Pressable
          onPress={() => {
            console.log("open notifications");
          }}
        >
          <MaterialCommunityIcons
            name="bell-circle-outline"
            size={50}
            color="white"
          />
        </Pressable>
      </View>
      {/* This will hold the Username, PFP, Follow and Message Button and Rating*/}
      <View style={styles.profileContainer}>
        {/* <Text style={styles.userName}>{ExampleProfile.userName}</Text> */}
        <Image style={styles.profilePicture} source={ExampleProfile.pfp.img} />
        <View>
          <Text style={styles.userName}> @user123 </Text>
          <Text style={styles.rating}> 4.7 Rating </Text>
        </View>
      </View>

      <View>
        <Text style={styles.urc}> Your Collection </Text>
        <View style={styles.myCollectionContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {ExampleProfile.collections.map((item) => GridView(item))}
          </ScrollView>
        </View>
      </View>

      {/* <FlatList
        data={ExampleProfile.collections}
        renderItem={({ item }) => <GridView img={item.img} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      /> */}
    </ScrollView>
  );
}
