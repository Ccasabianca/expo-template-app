import { Button, StatusBar, View } from "react-native";
import styles from "../styles";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteParams } from "../router";

type Props = NativeStackScreenProps<RouteParams, "Home">

export default function Home({ navigation }: Props){
    return (
<View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Button title="First item" onPress={()=> navigation.navigate("Details", { title: "First item", content :"First item content", stock:1, })} />
        <Button title="Second item" onPress={()=> navigation.navigate("Details", { title: "Second item", content :"Second item content", stock:0 })} />
            <Button title="Third item" onPress={()=> navigation.navigate("Details", { title: "Third item", content :"Third item content", stock:200, })} />
</View>
    )
};