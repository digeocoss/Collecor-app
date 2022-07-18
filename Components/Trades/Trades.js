import { getAssetsAsync } from "expo-media-library";
import { View, Text, Image, Button } from "react-native";
// Import the stylesheet
import { styles } from "./Styles";

const Trades = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headings}> @user123 </Text>
      <Image style={styles.tradeImage} source={require("../../assets/ex6.jpeg")} />
      <Button title="trade"/> 
      <Image style={styles.tradeImage} source={require("../../assets/ex7.jpeg")} />
      <Text style={styles.headings}> Type here </Text>
      <Button title="Buy->"/> 


    </View>
  );
};

export default Trades;
