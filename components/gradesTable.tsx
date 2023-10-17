import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import GradesList from './gradesList'
import React from "react";

type GradesTableProps = {
    item: GradeList,
    mode: String
    setMode: any,
    modal: any,
    setModalData: any
}

export default function GradesTable({
    item,
    mode,
    setMode,
    modal,
    setModalData
}: GradesTableProps) {

    let textColor = '#9c9c9c';
    switch (item.gradesData.predicted) {
        case 6:
            textColor = '#44bb44';
            break;
        case 4:
            textColor = '#fc4f00';
            break;
        case 3:
        case 2:
        case 1:
            textColor = '#dc3535';
            break;
        default:
            break;
    }

    const styles = StyleSheet.create({
        main: {
            flexDirection: 'row',
            borderBottomWidth: 2
        },
        subject: {
            height: 40,
            justifyContent: 'center',
            borderRightWidth: 1,
            paddingLeft: 10
        },
        SubjectText: {
            color: textColor,
            fontSize: 16
        },
        grades: {
            height: 40,
            justifyContent: 'center',
            borderLeftWidth: 1,
            paddingLeft: 5
        }
    });

    return (
        <View style={styles.main}>
            <View style={[styles.subject, { width: '27.5%' }]}>
                <Text style={styles.SubjectText}>{item.name}</Text>
            </View>
            <View style={[styles.grades, { width: '72.5%' }]}>
                <GradesList currentGrades={item} mode={mode} modal={modal} setModalData={setModalData} setMode={setMode} />
            </View>
        </View>
    )
}


