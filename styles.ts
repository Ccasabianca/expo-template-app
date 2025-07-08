import { StyleSheet } from "react-native";

export default StyleSheet.create({
container : {
  flex:1,
  flexDirection: "column",
  paddingTop: 100,
},
item: {
  margin:5,
  padding:5,
  color:"black",
  backgroundColor:"lightgreen",
  textAlign: "center",
},
filter : {
height:40,
width:200,
},
controls: {
  flex:1,
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  padding:10,
  backgroundColor:"white",
},
});