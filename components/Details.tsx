import React from "react";
import { StatusBar, Text, View } from "react-native";
import styles from "../styles";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteParams } from "../router";

type Props = NativeStackScreenProps<RouteParams, "Details">;

export default function ({ route, navigation }: Props) {
  const { content, title, stock } = route.params;
  React.useEffect(() => {
    navigation.setOptions({ title});
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>{content} and stock is {stock}</Text>
    </View>
  );
}
