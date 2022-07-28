import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084F6D",
  },
  iconHeader: {
    backgroundColor: "red",
    padding: 15,
    marginTop: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileContainer: {
    alignContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 200,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  userName: {
    color: "white",
    marginTop: "2%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  rating: {
    color: "white",
    marginTop: "2%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  // TODO: Figure out a way to make the buttons the same
  // TODO: Add font style
  messageButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    borderRadius: 30,
    textAlign: "center",
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: "10%",
  },
  messageText: {
    fontSize: 30,
    textAlign: "center",
  },
  urc: {
    color: "white",
    marginTop: "2%",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 35,
  },
  // collection start
  collectionContainer: {
    flexWrap: "wrap",
    alignSelf: "center",
    marginTop: 10,
  },

  myCollectionText: {
    position: "absolute",
    fontSize: 22,
    marginTop: 25,
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    textAlign: "center",
  },
  collectionGrid: {
    flex: 1,
    justifyContent: "space-evenly",
    width: 100,
    padding: "2%",
  },
  imgSize: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
});

export { styles };
