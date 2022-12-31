import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const Heading = ({ children }: Props) => {
  return (
    <View>
      <Text style={styles.heading}>{children}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
