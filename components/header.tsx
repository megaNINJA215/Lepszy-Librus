import React from "react";
import { StyleSheet, View, Text, Pressable, Animated } from "react-native";

type HeaderProps = {
    isAverage: Boolean,
    setAverage: any
}
export default function Header({
    isAverage,
    setAverage
}: HeaderProps) {
    const ocenyPageAnimation = new Animated.Value((global as any).animate ? (isAverage ? 150 : 0) : (isAverage ? 0 : 150));
    const sredniaPageAnimation = new Animated.Value((global as any).animate ? (isAverage ? 0 : 150) : (isAverage ? 150 : 0));

    if ((global as any).animate)
        if (!isAverage) {
            Animated.timing(sredniaPageAnimation, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
            }).start();
            Animated.timing(ocenyPageAnimation, {
                toValue: 150,
                duration: 500,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(sredniaPageAnimation, {
                toValue: 150,
                duration: 500,
                useNativeDriver: false,
            }).start();
            Animated.timing(ocenyPageAnimation, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
            }).start();
        }
    (global as any).animate = false;

    const styles = StyleSheet.create({
        main: {
            width: '100%',
            height: '10%'
        },
        tilte: {
            color: '#ffffff',
            alignSelf: 'center',
            fontSize: 28,
            marginBottom: 10,
        },
        pages: {
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around'
        },
        page: {
            justifyContent: 'center',
            height: 40,
            width: 150,
            borderColor: '#8bc34a',
            borderRadius: 4,
        },
        pageText: {
            color: '#ffffff',
            alignSelf: 'center',
            fontSize: 20,
            marginBottom: 2
        },
        pageBorder: {
            backgroundColor: '#8bc34a',
            height: 3,
            borderRadius: 2,
            alignSelf: 'center'
        }
    });

    return (
        <View style={styles.main}>
            <Text style={styles.tilte}>Lepszy Librus</Text>
            <View style={styles.pages}>
                <Pressable onPress={() => {
                    if (!isAverage) {
                        (global as any).animate = true;
                        setAverage(true);
                    }
                }}>
                    <View style={[styles.page]}>
                        <Animated.Text style={[styles.pageText, {
                            color: sredniaPageAnimation.interpolate({
                                inputRange: [0, 150],
                                outputRange: ['#ffffff', '#8bc34a']
                            })
                        }]}>Średnia</Animated.Text>
                        <Animated.View style={[styles.pageBorder, { width: sredniaPageAnimation }]}></Animated.View>
                    </View>
                </Pressable>
                <Pressable onPress={() => {
                    if (isAverage) {
                        (global as any).animate = true;
                        setAverage(false);
                    }
                }}>
                    <View style={[styles.page]}>
                        <Animated.Text style={[styles.pageText, {
                            color: ocenyPageAnimation.interpolate({
                                inputRange: [0, 150],
                                outputRange: ['#ffffff', '#8bc34a']
                            })
                        }]}>Oceny</Animated.Text>
                        <Animated.View style={[styles.pageBorder, { width: ocenyPageAnimation }]}></Animated.View>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}


