import { Platform, StatusBar, StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "ghostwhite",
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: {
        paddingTop: StatusBar.currentHeight,
        paddingBottom: StatusBar.currentHeight,
        gap: 40,
      },
    }),
  },
  box: {
    height: 80,
    width: 80,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: "darkgreen",
  },
  boxText: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
  },
  column: {
        flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "stretch",
  }
});
