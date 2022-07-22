import { getAssetsAsync } from "expo-media-library";
import { View, Text, Image, Button, Pressable } from "react-native";
// Import the stylesheet
import { ExampleProfile } from "../Profile/Profile_Data";
import { styles } from "./ByeStyles";

const Buy = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userNameContainer}>
        <Image style={styles.pfp} source={ExampleProfile.pfp.img} />
        <Image source={ require("../../assets/5card.png")} />
      </View>
      <Image style={styles.tradeImage}
        source={require("../../assets/ex9.jpeg")} />
      <View style={{ backgroundColor: "#f9c2ff" }}>
        <View>
          <Pressable style={styles.button}>
            <View style={{ backgroundColor: "red", borderRadius: 200 }}>
              <Text style={styles.text}> Buy </Text>
            </View>
          </Pressable>
          <Text style={styles.headings2}> $ __________ </Text>
          <Pressable style={styles.button}>
            <View style={{ backgroundColor: "red", borderRadius: 200, padding: "10%" }}>
              <Text style={styles.text}> Trade </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Buy;
