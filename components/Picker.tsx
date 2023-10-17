import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";

type PickerProps = {
    setPickerVisible: any,
    subject: String
}

export default function Picker({
    setPickerVisible,
    subject
}: PickerProps) {
    const styles = StyleSheet.create({
        main: {
            height: 25,
            width: 120,
            marginTop: 10,
            marginLeft: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 2
        },
        text: {
            fontSize: 18,
            color: '#ffffff'
        }
    })
    return (
        <Pressable
            style={styles.main}
            onPress={() => {
                setPickerVisible(true);
            }}>
            <Text style={styles.text}>{subject}</Text>
            <Text style={styles.text}>▼</Text>
        </Pressable>
    )
}