import React from "react";
import { TextInput, View } from "react-native";
import styles from "../styles";

type Props = {
  onFilter: (text: string) => void;
};

export default function ListFilter({ onFilter }: Props) {
  return (
    <View>
      <TextInput
        autoFocus
        placeholder="Search"
        style={styles.filter}
        onChangeText={onFilter}
      />
    </View>
  );
}
