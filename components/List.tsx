import React from "react";
import { FlatList, Text } from "react-native";
import styles from "../styles";
import ListControls from "./ListControls";

type Props= {
    data: {key: string; value: string}[];
    onFilter: (text:string) => void;
    onSort: () => void;
    asc: boolean;
};

export default function List({data, onFilter, onSort, asc}: Props){
    return(
        <FlatList 
        data={data}
        ListHeaderComponent={<ListControls {...{onFilter, onSort, asc }}/> }
        renderItem={({item}) => <Text style={styles.item}>{item.value}</Text>}
        />
    );
}