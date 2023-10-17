import { StyleSheet, View, Text } from "react-native";
import GradeSummary from "./gradeSummary";
import Summary from "./summary";
import AverageTableHeader from "./averageTableHeader";
import React from "react";

export default function Average({
}) {

    const styles = StyleSheet.create({
        main: {
            position: "absolute",
            top: 120,
            width: '100%'
        },
    });

    return (
        <View style={styles.main}>
            <AverageTableHeader />
            <View>
                {(global as any).grades.map((item: any) => (
                    <GradeSummary item={item} key={item.name} />
                ))}
            </View>
            <Summary />
        </View>
    )
}


