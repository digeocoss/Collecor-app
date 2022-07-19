import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: "5%",
  },
  headings: {
    padding: "5%",
    fontSize: 25,
    color: "Black",
    backgroundColor: "#f9c2ff",
     textAlign: "center"
  },
  itemselector: {
    backgroundColor: "grey",
    padding: "10%",
  },
   tradeImage: {
      width: "100%",
      hight: 200
    },
    imageItem: {
        width: "50%",
        height: 100,
    },
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export { styles };
