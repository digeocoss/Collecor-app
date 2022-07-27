import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./SinglePageStyle.js";

export default function SinglePage() {
  return (
    <View style={styles.container}>
      <Text>TEST</Text>
      <Pressable>
        <Text>Press Me</Text>
      </Pressable>
    </View>
  );
}
