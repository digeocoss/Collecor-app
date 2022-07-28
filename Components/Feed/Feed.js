import { Text, View, Image, Pressable } from "react-native";
import { FlatList, ScrollView } from "react-native";
import { styles } from "./FeedStyles";
// import data
import { CollectibleData } from "../../Data/FakeCollections";
import { FilterButtons } from "../../constants/FilterButtonData";

// Collection Images
const Item = ({ img }) => (
  <View style={styles.item}>
    <Image style={styles.imageitem} source={img} />
  </View>
);

const FilterButton = ({ title }) => (
  <Pressable style={styles.sortCat}>
    <Text style={styles.sortCatText}>{title}</Text>
  </Pressable>
);

// Buttons
const renderItem = ({ item }) => (
  <View>
    <Item img={item.img} />
  </View>
);

const renderButtons = ({ item }) => (
  <View>
    <FilterButton title={item.title} />
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.collectionsContainer}>
          <Text style={styles.headerText}> Featured Collections </Text>
        </View>

        <View style={styles.featuredCollections}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={CollectibleData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.sortContainer}>
          <Text style={styles.headSort}> Sort By </Text>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={FilterButtons}
            renderItem={renderButtons}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.mangaContainer}>
          <Text style={styles.headerText}> Manga </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={CollectibleData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style={styles.actionFiguresContainer}>
          <Text style={styles.headerText}> Action Figures </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={CollectibleData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
