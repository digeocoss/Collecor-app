import { getAssetsAsync } from "expo-media-library";
import { View, Text, Image, Button, Pressable } from "react-native";
// Import the stylesheet
import { styles } from "./ByeStyles";

const Buy = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userNameContainer}>
        <Image></Image>
      </View>
      <Image style={styles.pfp} source={styles.pfp.img} />
      {console.log(styles)}
        style={styles.tradeImage}
        source={require("../../assets/ex9.jpeg")}
      />
      <View style={{ backgroundColor: "#f9c2ff" }}>
        <View>
          <Pressable style={styles.button}>
            <View style={{ backgroundColor: "red", borderRadius: 200 }}>
              <Text style={styles.text}> Buy </Text>
            </View>
          </Pressable>
          <Text style={styles.headings2}> $ __________ </Text>
          <Pressable style={styles.button}>
            <View style={{ backgroundColor: "red", borderRadius: 200 }}>
              <Text style={styles.text}> Trade </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Buy;
