import { View, Text } from "react-native";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

export const Container = (props: Props) => {
  return (
    <View style={{ paddingHorizontal: 10, flex: 1 }}>{props.children}</View>
  );
};
