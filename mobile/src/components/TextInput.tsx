import React from "react";
import { Controller } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TextInputProps,
} from "react-native";

type Props = TextInputProps & {
  name: string;
  control: any;
  label?: string;
};

const TextInput = ({ name, control, label, ...props }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <>
            {label && <Text style={styles.label}>{label}</Text>}
            <RNTextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              keyboardType="default"
              {...props}
            />
          </>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default TextInput;
