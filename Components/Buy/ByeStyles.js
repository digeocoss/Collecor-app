import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headings2: {
    padding: "5%",
    fontSize: 25,
    color: "black",
    backgroundColor: "white",
    textAlign: "center",
  },
  container: {
    backgroundColor: "black",
    padding: "5%",
  },
  headings: {
    fontSize: "25px",
    color: "White",
    color: "white"
  },
  itemselector: {
    backgroundColor: "grey",
    padding: "10%",
  },
   tradeImage: {
      width: "100%",
      hight: 200
    },
    Container1: {
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
      
    },
    container: {
      padding: 5,
      backgroundColor: "lightgray",
      borderWidth: 1,
      borderColor: "gray",
      marginVertical: 10,
    },
    pfp: {
      width: 150,
      height: 150,
      borderRadius: 200,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "black",
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      backgroundColor: "grey",
      padding: "5%",
    },
    headings: {
      padding: "5%",
      fontSize: 25,
      color: "black",
      backgroundColor: "#f9c2ff",
      textAlign: "center",
    },
    itemselector: {
      backgroundColor: "grey",
      padding: "10%",
    },
    tradeImage: {
      width: "100%",
      hight: 200,
    },
  });
  const stylesFeed = StyleSheet.create({
    container: {
      // backgroundColor: "black",
      padding: "5%",
    },
    headings: {
      padding: "5%",
      fontSize: 25,
      // color: "Black",
      backgroundColor: "#f9c2ff",
      textAlign: "center",
    },
    itemselector: {
      backgroundColor: "grey",
      padding: "10%",
    },
    tradeImage: {
      width: "100%",
      hight: 200,
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
