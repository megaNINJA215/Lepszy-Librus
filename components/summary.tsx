import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function TableHeader({
}) {

    const styles = StyleSheet.create({
        main: {
            width: '100%',
            height: '20%',
            justifyContent: 'center',
            marginTop: 30
        },
        text: {
            color: '#ffffff',
            fontSize: 32,
            width: '50%',
            marginLeft: 12
        },
        fragment: {
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center'
        }
    });

    return (
        <View style={styles.main}>
            <View style={styles.fragment}>
                <Text style={[styles.text, { textAlign: 'right' }]}>Średnia:</Text>
                <Text style={styles.text}>{(global as any).average}</Text>
            </View>
            <View style={styles.fragment}>
                <Text style={[styles.text, { textAlign: 'right' }]}>Ocena:</Text>
                <Text style={styles.text}>{(global as any).predicted}</Text>
            </View>
        </View>
    )
}


