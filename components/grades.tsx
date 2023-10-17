import { StyleSheet, View, Text } from "react-native";
import GradesTable from './gradesTable'
import GradesActionButtons from './gradesActionButtons'
import { useState } from "react";
import ModalView from "./modalView";
import ModalAdd from "./modalAdd";
import ModalModify from "./modalModify";
import React from "react";

export default function Grades({
}) {

    const [mode, setMode] = useState('n')
    const [visibleModal, setVisibleModal] = useState('');
    const [modalData, setModalData] = useState({ gradeData: { value: 0, date: '', description: '' }, subject: '', color: '#ffffff' });

    const styles = StyleSheet.create({
        main: {
            position: "absolute",
            top: 120,
            width: '100%'
        },
        headerContent: {
            height: 40,
            justifyContent: 'center',
            alignItems: 'center'
        },
        headerText: {
            color: '#ffffff',
            fontSize: 16
        },
        header: {
            flexDirection: 'row',
            borderTopWidth: 2,
            borderBottomWidth: 2
        },
        table: {

        }
    });

    return (
        <View style={styles.main}>
            <ModalAdd visibleModal={visibleModal} setVisibleModal={setVisibleModal} modalData={modalData} />
            <ModalModify visibleModal={visibleModal} setVisibleModal={setVisibleModal} modalData={modalData} />
            <ModalView visibleModal={visibleModal} setVisibleModal={setVisibleModal} setModalData={setModalData} modalData={modalData} />
            <View style={styles.header}>
                <View style={[styles.headerContent, { width: '27.5%', borderRightWidth: 1 }]}>
                    <Text style={styles.headerText}>Przedmiot</Text>
                </View>
                <View style={[styles.headerContent, { width: '72.5%', borderLeftWidth: 1 }]}>
                    <Text style={styles.headerText}>Oceny</Text>
                </View>
            </View>
            <View style={styles.table}>
                {(global as any).grades.map((item: GradeList) => (
                    <GradesTable item={item} key={item.name} mode={mode} modal={setVisibleModal} setModalData={setModalData} setMode={setMode} />
                ))}
            </View>
            <GradesActionButtons setMode={setMode} modal={setVisibleModal} mode={mode} />
        </View>
    )
}