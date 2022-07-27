import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./SinglePageStyle.js";
import { BottomDrawer } from 'react-native-bottom-drawer-view';

  return (
    <View style={styles.container}>
      <Text>TEST</Text>
      <Pressable onPress={() => console.log('Open Drawer')}>
        <Text>Press Me</Text>
      </Pressable>

      <BottomDrawer containerHeight={100} offset={TAB_BAR_HEIGHT}>
        {renderContent()}
      </BottomDrawer>
    </View>
  );
}
