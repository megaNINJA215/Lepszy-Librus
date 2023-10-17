import { StyleSheet, View, Text } from "react-native";
import React from "react";

type GradeSummaryProps = {
    item: GradeList
}

export default function GradeSummary({
    item
}: GradeSummaryProps) {

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
            width: '100%',
            height: 40,
            borderBottomWidth: 2
        },
        text: {
            color: textColor,
            fontSize: 16
        },
        content: {
            height: 40,
            justifyContent: 'center',
            borderRightWidth: 2
        },
        average: {
            height: 40,
            justifyContent: 'center',
            borderRightWidth: 2,
            width: '15%',
            alignItems: 'center',
            marginLeft: '2.5%',
            marginRight: '2.5%',
            paddingRight: '2.5%'
        },
        predicted: {
            height: 40,
            justifyContent: 'center',
            width: '30%',
            alignItems: 'center',
            paddingRight: '2.5%'
        }
    });

    return (
        <View style={styles.main}>
            <View style={[styles.content, { width: '25%', marginLeft: 10 }]}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
            <View style={[styles.content, { width: '22.5%', marginLeft: '2.5%', }]}>
                <Text style={styles.text}>{item.gradesData.grades.length}</Text>
            </View>
            <View style={styles.average}>
                <Text style={styles.text}>{item.gradesData.grades.length == 0 ? '-' : item.gradesData.average}</Text>
            </View>
            <View style={styles.predicted}>
                <Text style={styles.text}>{item.gradesData.grades.length == 0 ? '-' : item.gradesData.predicted}</Text>
            </View>

        </View>
    );
}


