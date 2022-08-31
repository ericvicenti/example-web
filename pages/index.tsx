import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useHeadline } from "../zerve/DemoStore";
import { HumanText } from "@zerve/react-native-content/HumanText";

export default function Home() {
  const { data, isLoading } = useHeadline({
    onError: (err) => alert(err),
  });
  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : null}
      {data && <HumanText value={data} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headline: {
    fontSize: 32,
  },
});
