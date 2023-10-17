import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";

type GradesActionButtonsProps = {
    setMode: (value: string) => void
    mode: string,
    modal: (value: string) => void
}

export default function GradesActionButtons({
    setMode,
    mode,
    modal
}: GradesActionButtonsProps) {

    const styles = StyleSheet.create({
        main: {
            width: '100%',
            flexDirection: 'row',
            height: 140,
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        button: {
            width: 120,
            height: 50,
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 5,
        },
        buttonTitle: {
            fontSize: 20,
            fontWeight: 'bold'
        }
    });

    return (
        <View style={styles.main}>
            <Pressable
                onPress={() => {
                    mode == 'r' ? console.log('set to normal mode') : console.log('set to remove mode');
                    mode == 'r' ? setMode('n') : setMode('r');
                }}>
                <View style={[styles.button, { borderColor: mode == 'r' ? '#ff2020' : '#882020' }]}>
                    <Text style={[styles.buttonTitle, { color: mode == 'r' ? '#ff2020' : '#882020' }]}>Remove</Text>
                </View>
            </Pressable>
            <Pressable
                onPress={() => {
                    modal('a');
                }}>
                <View style={[styles.button, { borderColor: '#00ee50' }]}>
                    <Text style={[styles.buttonTitle, { color: '#00ee50' }]}>Add</Text>
                </View>
            </Pressable>
            <Pressable
                onPress={() => {
                    mode == 'm' ? console.log('set to normal mode') : console.log('set to modify mode');
                    mode == 'm' ? setMode('n') : setMode('m');
                }}>
                <View style={[styles.button, { borderColor: mode == 'm' ? '#20a4ff' : '#205488' }]}>
                    <Text style={[styles.buttonTitle, { color: mode == 'm' ? '#20a4ff' : '#205488' }]}>Modify</Text>
                </View>
            </Pressable>
        </View>
    )
}