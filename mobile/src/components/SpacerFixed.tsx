import { View, Text } from "react-native";
import React from "react";

export const SpacerFixed = ({ horizontal = false }) => {
  return <View style={{ height: 15, width: horizontal ? 15 : 0 }} />;
};

export const SpacerHorizontal = () => {
  return <View style={{ width: 15 }} />;
};
