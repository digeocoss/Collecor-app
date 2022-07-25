import { getAssetsAsync } from "expo-media-library";
import { View, Text, Image, Button, Pressable } from "react-native";
import { ExampleProfile } from "../Profile/Profile_Data";
// Import the stylesheet
import { styles } from "./Styles";

const Trades = () => {
  return (
    <View style={{ backgroundColor: "#084F6D", flex: 1 }} >
      <View style={styles.userNameContainer}>
        <Image style={styles.pfp} source={ExampleProfile.pfp.img} />
        <Image resizeMode = 'strech' style = {{width: 270, position : 'absolute', right:0, marginTop : 10}} source={ require("../../assets/5card.png")} />
      </View>
      <Image style={styles.tradeImage}
        source={require("../../assets/ex9.jpeg")} />
      <View >
        <View>
          <Pressable style={styles.button}>
            <View style={{ backgroundColor: "#81C8E7", borderRadius: 200, marginTop: 50, marginBottom: 10, padding: "2%" }}>
              <Text style={styles.text}> Trade </Text>
            </View>
          </Pressable >
          <Pressable >
          <View style={styles.moneyThing} >
          <Text style={styles.buyImput}> insert treade </Text>
          </View>
          </Pressable>
          <Pressable style={styles.button}>
            <View style={{ backgroundColor: "#81C8E7", borderRadius: 200, marginTop: 60, padding: "2%"}}>
              <Text style={styles.text}>  Buy  </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Trades;
