import { View, Text, Pressable, Image } from "react-native";
import { styles } from "./SinglePageStyle.js";
import { ExampleProfile } from "../../Data/Profile_Data";
import BottomSheet from "@gorhom/bottom-sheet";
import { useRef, useMemo, useCallback } from "react";

export default function SinglePage() {
  const bottomSheetRef = useRef(BottomSheet);
  const snapPoints = useMemo(() => ["1%", "75%"], []);
  const handleSheetChanges = useCallback((index) => {
    console.log("HandleSheetChanges", index);
  });
  const open = () => {
    bottomSheetRef.current.snapToIndex(1);
  };

  const close = () => {
    bottomSheetRef.current.snapToIndex(0);
  };
  const bottomSheet = () => (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose
    >
      <View style={styles.bottomSheetContainer}>
        <Text>Content should go here!</Text>
        <Pressable onPress={() => close()}>
          <Text>Close the Bottom Drawer</Text>
        </Pressable>
      </View>
    </BottomSheet>
  );
  return (
    <View style={styles.container}>
      <View style={styles.TradeThingContainer}>
        <Image
          style={styles.tradeThing}
          source={ExampleProfile.tradeItem.img}
        />
      </View>
      <Text style={styles.ooo}>ooo</Text>
      <View>
        <View style={styles.profileContainer}>
          <View style={styles.pfpImageContainer} >
          <Image
            style={styles.profilePicture}
            source={ExampleProfile.pfp.img}
          />
          </View>
          <View style={styles.userRating} >
          <Text style={styles.proText}>@user123</Text>
          <Text style={styles.rat}>4.7 Rating</Text>
          </View>
        </View>
        <Text style={styles.itemTitle} >ChainSaw Man Vol.1 manga book</Text>
        <Text style={styles.itemDis} >Fresh from barns and noble</Text>
      </View>
      <View style={styles.space} >
      <Pressable style={styles.tradeBut} onPress={() => open()}>
        <Text>Trade</Text>
      </Pressable>
      <Pressable onPress={() => open()}>
        <Text>Buy</Text>
      </Pressable>
      <Pressable onPress={() => open()}>
        <Text>Trade & Buy</Text>
      </Pressable>
      </View>
      {bottomSheet()}
    </View>
  );
}
