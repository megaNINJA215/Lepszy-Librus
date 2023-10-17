import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function AverageTableHeader({
}) {

    const styles = StyleSheet.create({
        main: {
            flexDirection: 'row',
            width: '100%',
            borderBottomWidth: 2,
            borderTopWidth: 2,
            height: 44,
        },
        content: {
            height: 40,
            justifyContent: 'center',
            borderRightWidth: 2
        },
        text: {
            color: '#ffffff',
            fontSize: 16
        }
    });

    return (
        <View style={styles.main}>
            <View style={[styles.content, { width: '25%', marginLeft: 10 }]}>
                <Text style={styles.text}>Przedmiot</Text>
            </View>
            <View style={[styles.content, { width: '22.5%', marginLeft: '2.5%', }]}>
                <Text style={styles.text}>Liczba ocen</Text>
            </View>
            <View style={[styles.content, { width: '15%', marginLeft: '2.5%' }]}>
                <Text style={styles.text}>Średnia</Text>
            </View>
            <View style={[styles.content, { width: '30%', marginLeft: '2.5%', borderRightWidth: 0 }]}>
                <Text style={styles.text}>Przewidywana</Text>
            </View>
        </View >
    )
}


