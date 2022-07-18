import { getAssetsAsync } from "expo-media-library";
import { View, Text, Image, Button } from "react-native";
// Import the stylesheet
import { styles } from "./ByeStyles";

const Buy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headings}> @user123 </Text>
      <Image style={styles.tradeImage} source={require("../../assets/ex9.jpeg")} />
      <Button title="Buy"/> 
      <Text style={styles.headings}> $ Amount </Text>
      <Button title="Trade->"/> 


    </View>
  );
};

export default Buy;
