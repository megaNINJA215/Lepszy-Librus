import { StyleSheet, Text, FlatList, Pressable } from "react-native";
import { updateGrades } from "../globalFunctions";
import React from "react";

type GradesListProps = {
    currentGrades: GradeList,
    mode: String,
    setMode: (value: string) => void,
    modal: (value: string) => void,
    setModalData: (value: ModalData) => void
}
export default function GradesList({
    currentGrades,
    mode,
    setMode,
    modal,
    setModalData
}: GradesListProps) {


    const styles = StyleSheet.create({
        main: {
            width: 28,
            height: 28,
            marginRight: 6,
            marginTop: 6,
            justifyContent: 'center',
            alignItems: 'center'
        },
        grade: {
            fontWeight: 'bold'
        }
    });

    return (
        <FlatList
            data={currentGrades.gradesData.grades}
            renderItem={({ item: grade }) => {
                let color = '#9c9c9c'
                switch (currentGrades.scale) {
                    case 6:
                        switch (grade.value) {
                            case 6:
                                color = '#44bb44'
                                break;
                            case 4:
                                color = '#fc4f00'
                                break;
                            case 3:
                            case 2:
                            case 1:
                                color = '#dc3535'
                                break;

                            default:
                                break;
                        }
                        break;
                    case 100:
                        if (grade.value >= 100) {
                            color = '#44bb44';
                        } else if (70 <= grade.value && grade.value < 85) {
                            color = '#fc4f00';
                        } else if (grade.value < 70) {
                            color = '#dc3535';
                        } else {
                            color = '#9c9c9c';
                        }
                        break;
                    default:
                        break;
                }

                return (
                    <Pressable
                        style={[styles.main, { backgroundColor: color }]}
                        onPress={() => {
                            switch (mode) {
                                case 'm':
                                    setModalData({ gradeData: grade, subject: String(currentGrades.name), color: color });
                                    modal('m');
                                    setMode('n');
                                    break;
                                case 'n':
                                    setModalData({ gradeData: grade, subject: currentGrades.name, color: color });
                                    modal('n');
                                    break;
                                case 'r':
                                    let sybjectIndex = (global as any).grades.findIndex((item: GradeList) => item.name == currentGrades.name);
                                    let gradeIndex = (global as any).grades[sybjectIndex].gradesData.grades.findIndex((item: Grade) =>
                                        item.date == grade.date &&
                                        item.value == grade.value &&
                                        item.description == grade.description
                                    );
                                    (global as any).grades[sybjectIndex].gradesData.grades.splice(gradeIndex, 1);
                                    setMode('n');
                                    updateGrades(currentGrades.name);
                                    break;
                                default:
                                    break;
                            }
                        }}>
                        <Text style={styles.grade}>
                            {grade.value}
                        </Text>
                    </Pressable>
                )
            }}
            key={currentGrades.name}
            horizontal={true}
        />
    )
}


