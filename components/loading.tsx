import { StyleSheet, View, ActivityIndicator, Dimensions } from "react-native";
import React from "react";

export default function Loading({
}) {

    const styles = StyleSheet.create({
        main: {
            position: "absolute",
            top: 140,
            width: '100%',
            height: Dimensions.get('window').height - 280,
            justifyContent: 'center'
        },
    });

    return (
        <View style={styles.main}>
            <ActivityIndicator size={100} color={"#999999"} />
        </View>
    )
}


