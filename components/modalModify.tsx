import { useEffect, useState } from "react";
import { Pressable, View, Text, TextInput, Dimensions, StyleSheet } from "react-native";
import Picker from "./Picker";
import PickerModal from "./pickerModal";
import { updateGrades } from "../globalFunctions";
import React from "react";


type ModalModifyProps = {
    visibleModal: String
    setVisibleModal: any
    modalData: ModalData
}

export default function ModalModify({
    visibleModal,
    setVisibleModal,
    modalData
}: ModalModifyProps) {
    const [date, setDate] = useState('');
    const [grade, setGrade] = useState('');
    const [description, setDescription] = useState('');
    const [subject, setSubject] = useState('');

    useEffect(() => {
        setDate(String(modalData.gradeData.date))
        setGrade(String(modalData.gradeData.value))
        setDescription(String(modalData.gradeData.description))
        setSubject(String(modalData.subject))
    }, [visibleModal]);

    const [pickerVisible, setPickerVisible] = useState(false);

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
    return (
        visibleModal == 'm' ?
            <View style={styles.main}>
                <PickerModal setSubject={setSubject} visible={pickerVisible} setVisible={setPickerVisible} />
                <View style={styles.modal}>
                    <View style={styles.subjectAndDate}>
                        <Picker setPickerVisible={setPickerVisible} subject={subject} />
                        <TextInput
                            style={styles.dateInput}
                            keyboardType="numeric"
                            onChangeText={setDate}
                            value={date}
                        />
                    </View>
                    <View style={styles.grade}>
                        <Text style={styles.gradeText}>Ocena: </Text>
                        <TextInput
                            style={styles.gradeInput}
                            keyboardType="numeric"
                            onChangeText={setGrade}
                            value={grade}
                        />
                    </View>
                    <Text style={styles.descriptionText}>Opis:</Text>
                    <TextInput
                        style={styles.descriptionInput}
                        onChangeText={setDescription}
                        multiline={true}
                        value={description}
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
                                    if (subject == modalData.subject) {
                                        let subjcetIndex = (global as any).grades.findIndex((item: GradeList) => item.name == subject);
                                        let gradeIndex = (global as any).grades[subjcetIndex].gradesData.grades.findIndex((item: Grade) =>
                                            item.date == modalData.gradeData.date &&
                                            item.value == modalData.gradeData.value &&
                                            item.description == modalData.gradeData.description
                                        );
                                        (global as any).grades[subjcetIndex].gradesData.grades[gradeIndex] = { value: parseInt(grade), date: date, description: description };
                                    } else {
                                        let subjcetTargetIndex = (global as any).grades.findIndex((item: GradeList) => item.name == subject);
                                        let subjcetOriginIndex = (global as any).grades.findIndex((item: GradeList) => item.name == modalData.subject);
                                        (global as any).grades[subjcetTargetIndex].gradesData.
                                            grades.push({ value: parseInt(grade), date: date, description: description });


                                        let gradeOriginIndex = (global as any).grades[subjcetTargetIndex].gradesData.grades.findIndex((item: Grade) =>
                                            item.date == modalData.gradeData.date &&
                                            item.value == modalData.gradeData.value &&
                                            item.description == modalData.gradeData.description
                                        );

                                        (global as any).grades[subjcetOriginIndex].gradesData.grades.splice(gradeOriginIndex, 1);
                                        updateGrades(modalData.subject);
                                    }
                                    updateGrades(subject);
                                }
                            }}>
                            <Text style={styles.addText}>Zapisz</Text>
                        </Pressable>
                    </View>
                </View>
            </View> : null
    )
}