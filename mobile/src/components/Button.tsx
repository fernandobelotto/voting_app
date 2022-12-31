import {
  View,
  Text,
  Pressable,
  PressableProps,
  StyleSheet,
  ViewProps,
  TextProps,
} from "react-native";
import React, { PropsWithChildren } from "react";

type Props = PressableProps &
  PropsWithChildren<{
    bg?: string;
    color?: string;
    textProps?: TextProps;
    viewProps?: ViewProps;
  }>;

export const Button = ({
  bg,
  color,
  onPress,
  children,
  textProps,
  viewProps,
}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles({ bg }).container} {...viewProps}>
        <Text style={styles({ color }).text} {...textProps}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = ({ bg, color }: any) =>
  StyleSheet.create({
    container: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      backgroundColor: bg || "white",
      borderRadius: 5,
      overflow: "hidden",
    },
    text: {
      textAlign: "center",
      fontSize: 16,
      color: color || "black",
    },
  });
