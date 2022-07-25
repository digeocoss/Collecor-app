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
    backgroundColor: "#81C8E7",
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
    backgroundColor: "#084F6D"
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export { styles };
