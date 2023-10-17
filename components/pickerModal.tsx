import React, { SetStateAction } from "react";
import { Pressable, View, Text, Dimensions, StyleSheet } from "react-native";

type PickerModalProps = {
    setSubject: any
    visible: Boolean | null
    setVisible: any
}

export default function PickerModal({
    setSubject,
    visible,
    setVisible,
}: PickerModalProps) {
    const Subjects: string[] = ['-', 'Biologia', 'Chemia', 'Fizyka', 'Geografia', 'Historia', 'Informatyka', 'Angielski', 'Niemiecki', 'Polski', 'Matematyka', 'P.P.'];
    const styles = StyleSheet.create({
        main: {
            position: 'absolute',
            zIndex: 2,
            top: 140 - Dimensions.get('window').height / 2,
            left: -Dimensions.get('window').width / 2 + 125,
            width: '100%',
            height: '100%'
        },
        modal: {
            position: 'absolute',
            top: Dimensions.get('window').height / 2 - 105,
            left: Dimensions.get('window').width / 2 - 120,
            height: 410,
            width: 135,
            backgroundColor: '#202123',
            borderRadius: 10,
            borderWidth: 2
        },
        subject: {
            paddingVertical: 4,
            marginHorizontal: 10,
            borderBottomWidth: 1
        },
        subjectText: {
            fontSize: 18,
            height: 25,
            color: '#ffffff'
        }
    })
    return (
        visible ?
            <Pressable
                style={styles.main}
                onPress={() => {
                    setVisible(false);
                }}
            >
                <View style={styles.modal}>
                    {Subjects.map((subject: string) => {
                        return <Pressable
                            onPress={() => {
                                setSubject(subject);
                                setVisible(false);
                            }}
                            key={subject}
                            style={styles.subject}>
                            <Text style={styles.subjectText}>{subject}</Text>
                        </Pressable>
                    })}
                </View>
            </Pressable> : null
    )
}