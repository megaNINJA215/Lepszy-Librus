import { useState } from "react";
import { Pressable, View, Text, TextInput, Dimensions, StyleSheet } from "react-native";
import Picker from "./Picker";
import PickerModal from "./pickerModal";
import { updateGrades } from "../globalFunctions";
import React from "react";

type ModalAddProps = {
    visibleModal: String
    setVisibleModal: any
    modalData: ModalData
}

export default function ModalAdd({
    visibleModal,
    setVisibleModal,
    modalData
}: ModalAddProps) {

    const styles = StyleSheet.create({
        main: {
            position: 'absolute',
            zIndex: 1,
            top: -260 + Dimensions.get('window').height / 2,
            left: Dimensions.get('window').width / 2 - 125,
            width: '100%',
            height: Dimensions.get('window').height
        },
        modal: {
            backgroundColor: '#262626',
            width: 250,
            height: 280,
            borderRadius: 10,
            borderColor: modalData.color,
            borderWidth: 2
        },
        subjectAndDate: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        dateInput: {
            fontSize: 18,
            color: '#ffffff',
            borderBottomWidth: 2,
            marginTop: 10,
            marginHorizontal: 10,
            height: 25,
            width: 92
        },
        grade: {
            flexDirection: 'row',
            marginTop: 5,
            marginLeft: 10
        },
        gradeText: {
            color: '#ffffff',
            fontSize: 18
        },
        gradeInput: {
            width: 40,
            height: 25,
            fontSize: 18,
            color: '#ffffff',
            borderBottomWidth: 2,
            textAlign: 'center'
        },
        descriptionText: {
            color: '#ffffff',
            fontSize: 18,
            marginTop: 35,
            marginHorizontal: 10
        },
        descriptionInput: {
            color: '#ffffff',
            fontSize: 18,
            marginHorizontal: 10,
            height: 110,
            borderWidth: 1,
            borderRadius: 5,
            textAlignVertical: 'top',
            paddingHorizontal: 5
        },
        addAndCancel: {
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        cancel: {
            marginTop: 5,
            height: 30,
            width: 100,
            borderWidth: 2,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#ff2222'
        },
        cancelText: {
            color: '#ff2222'
        },
        add: {
            marginTop: 5,
            height: 30,
            width: 100,
            borderWidth: 2,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#22ff44'
        },
        addText: {
            color: '#22ff44'
        },
    });

    const [date, setDate] = useState('');
    const [grade, setGrade] = useState('');
    const [description, setDescription] = useState('');
    const [subject, setSubject] = useState("-");
    const [pickerVisible, setPickerVisible] = useState(false);
    return (
        visibleModal == 'a' ?
            <View style={styles.main}>
                <PickerModal setSubject={setSubject} visible={pickerVisible} setVisible={setPickerVisible} />
                <View style={styles.modal}>
                    <View style={styles.subjectAndDate}>
                        <Picker setPickerVisible={setPickerVisible} subject={subject} />
                        <TextInput
                            style={styles.dateInput}
                            keyboardType="numeric"
                            onChangeText={setDate} />
                    </View>
                    <View style={styles.grade}>
                        <Text style={styles.gradeText}>Ocena: </Text>
                        <TextInput
                            style={styles.gradeInput}
                            keyboardType="numeric"
                            onChangeText={setGrade}
                        />
                    </View>
                    <Text style={styles.descriptionText}>Opis:</Text>
                    <TextInput
                        style={styles.descriptionInput}
                        onChangeText={setDescription}
                        multiline={true}
                    />
                    <View style={styles.addAndCancel}>
                        <Pressable
                            style={styles.cancel}
                            onPress={() => {
                                setVisibleModal('');
                            }}>
                            <Text style={styles.cancelText}>Anuluj</Text>
                        </Pressable>
                        <Pressable
                            style={styles.add}
                            onPress={() => {
                                setVisibleModal('');
                                if (subject != '-' && date != '' && grade != '' && description != '') {
                                    (global as any).grades[(global as any).grades.findIndex((item: GradeList) => item.name == subject)].gradesData.
                                        grades.push({ value: parseInt(grade), date: date, description: description });
                                    updateGrades(subject);
                                    setDate('');
                                    setGrade('');
                                    setDescription('');
                                    setSubject("-");
                                }
                            }}>
                            <Text style={styles.addText}>Dodaj</Text>
                        </Pressable>
                    </View>
                </View>
            </View> : null
    )
}

function ColorValue(color: String): any | import("react-native").ColorValue | undefined {
    throw new Error("Function not implemented.");
}
