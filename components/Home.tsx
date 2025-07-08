import { Button, StatusBar, Text, View } from "react-native";
import styles from "../styles";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router";

type Props = NativeStackScreenProps<RootStackParamList, "Home">

export default function Home({ navigation }: Props){
    return (
<View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Text>Home Scren</Text>
    <Button title="First item" onPress={()=> navigation.navigate("Details", { title: "First item" })} />
        <Button title="Second item" onPress={()=> navigation.navigate("Details", { title: "Second item" })} />
            <Button title="Third item" onPress={()=> navigation.navigate("Details", { title: "Third item" })} />
</View>
    )
};