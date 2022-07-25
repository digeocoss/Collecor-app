import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084F6D",
  },
  profileContainer: {
    alignContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  userName: {
    backgroundColor: "#81C8E7",
    borderWidth: 1,
    borderColor: "#81C8E7",
    textAlign: "center",
    borderRadius: 10,
    fontSize: 30,
    overflow: "hidden",
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 200,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  // TODO: Figure out a way to make the buttons the same
  // TODO: Add font style
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "70%",
  },
  followButton: {
    backgroundColor: "#81C8E7",
    borderWidth: 1,
    borderColor: "#81C8E7",
    borderRadius: 30,
    paddingRight: 10,
    paddingLeft: 10,
  },
  messageButton: {
    backgroundColor: "#81C8E7",
    borderWidth: 1,
    borderColor: "#81C8E7",
    textAlign: "center",
    borderRadius: 30,
    textAlign: "center",
    paddingRight: 10,
    paddingLeft: 10,
  },
  followText: {
    fontSize: 30,
    textAlign: "center",
  },
  messageText: {
    fontSize: 30,
    textAlign: "center",
  },
  // Rating
  ratingContainer: {
    backgroundColor: "#000000",
    width: "100%",
    marginTop: "3%",
    padding: "3%",
  },
  rating: {
    padding: 50,
  },
  // collection start
  collectionContainer: {
    flexWrap: "wrap",
    alignSelf: "center",
    marginTop: 10,
  },
  collectionBackground: {
    backgroundColor: "#81C8E7",
    width: 200,
    height: 35,
    margin: 20,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 10,
    transform: [{ rotate: "7deg" }],
  },
  collectionBackgroundTwo: {
    backgroundColor: "#81C8E7",
    width: 200,
    height: 35,
    margin: 20,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 10,
    transform: [{ rotate: "-7deg" }],
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
  },
  imgSize: {
    width: "100%",
    height: 200,
  },
});

export { styles };
