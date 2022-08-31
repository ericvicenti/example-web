import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useBanner } from "../zerve/DemoStore";

export default function Home() {
  const { data, isLoading } = useBanner({
    onError: (err) => alert(err),
  });
  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : null}
      <Text style={styles.headline}>{data}</Text>
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
