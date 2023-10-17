import { StyleSheet, View, StatusBar } from "react-native";
import Header from "./components/header";
import Grades from "./components/grades";
import Average from "./components/average";
import { useEffect, useState } from "react";
import { getData } from "./globalFunctions";
import Loading from "./components/loading";
import React from "react";

export default function App(): JSX.Element {

  const [data, setData] = useState(null);

  useEffect(() => {
    getData(setData);
    StatusBar.setBackgroundColor('#1f1f1f');
    StatusBar.setBarStyle('light-content');
  }, []);

  const [isAverage, setAverage] = useState(true);

  const styles = StyleSheet.create({
    main: {
      height: '100%',
      width: '100%',
      backgroundColor: '#1f1f1f',
    },
  });

  return (
    <View style={styles.main}>
      <Header isAverage={isAverage} setAverage={setAverage}></Header>
      {data ? (isAverage ? <Average /> : <Grades />) : (<Loading />)}
    </View>
  );
}
