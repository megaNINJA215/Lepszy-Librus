import { Pressable, View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";

type ModalViewProps = {
    visibleModal: String
    setVisibleModal: any
    setModalData: any,
    modalData: ModalData
}

export default function ModalView({
    visibleModal,
    setVisibleModal,
    setModalData,
    modalData
}: ModalViewProps) {
    const styles = StyleSheet.create({
        main: {
            position: 'absolute',
            zIndex: 1,
            top: -120,
            width: '100%',
            height: Dimensions.get('window').height
        },
        modal: {
            position: 'absolute',
            top: -125 + Dimensions.get('window').height / 2,
            left: Dimensions.get('window').width / 2 - 125
        },
        subjectAndDate: {
            backgroundColor: '#262626',
            width: 250,
            height: 250,
            borderRadius: 10,
            borderColor: modalData.color,
            borderWidth: 2
        },
        subjectAndDateText: {
            color: '#ffffff',
            fontSize: 18,
            marginTop: 10,
            marginHorizontal: 10
        },
        grade: {
            flexDirection: 'row',
            marginTop: 5,
            marginLeft: 10
        },
        gradeTitle: {
            color: '#ffffff',
            fontSize: 18
        },
        gradeValue: {
            color: modalData.color,
            fontSize: 18
        },
        descriptionTitle: {
            color: '#ffffff',
            fontSize: 18,
            marginTop: 35,
            marginHorizontal: 10
        },
        descriptionValue: {
            color: '#ffffff',
            fontSize: 18,
            marginHorizontal: 10,
            height: 110
        }
    })
    return (
        visibleModal == 'n' ?
            <Pressable
                onPress={() => {
                    setVisibleModal('');
                    setModalData({ gradeData: { value: 0, date: '', description: '' }, subject: '', color: '#ffffff' });
                }}
                style={styles.main}>
                <Pressable
                    onPress={() => { }}
                    style={styles.modal}>

                    <View style={styles.subjectAndDate}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.subjectAndDateText}>{modalData.subject}</Text>
                            <Text style={styles.subjectAndDateText}>{modalData.gradeData.date}</Text>
                        </View>
                        <View style={styles.grade}>
                            <Text style={styles.gradeTitle}>Ocena: </Text>
                            <Text style={styles.gradeValue}>{modalData.gradeData.value}</Text>
                        </View>
                        <Text style={styles.descriptionTitle}>Opis:</Text>
                        <Text style={styles.descriptionValue}>{modalData.gradeData.description}</Text>
                    </View>
                </Pressable>
            </Pressable> : null
    )
}