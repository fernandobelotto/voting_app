import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  useCreatePollMutation,
  useUpdatePollByIdMutation,
} from "../store/apis/pool.api";
import { Poll, PollFormType } from "types";
import { SpacerFixed } from "./SpacerFixed";
import TextInput from "./TextInput";

type Props = {
  defaultValues?: Poll;
};

export const PollForm = ({ defaultValues }: Props) => {
  const navigate = useNavigation<any>();

  const { control, handleSubmit } = useForm<PollFormType>({
    defaultValues: defaultValues,
  });
  const [createPoll] = useCreatePollMutation();

  const [updatePoll] = useUpdatePollByIdMutation();

  const onSubmit = (body: any) => {
    if (defaultValues) {
      updatePoll({ id: defaultValues.id, body: body }).then(() =>
        navigate.navigate("PollsScreen")
      );
    } else {
      createPoll(body).then(() => navigate.navigate("PollsScreen"));
    }
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Poll Form</Text>
      <SpacerFixed />
      <TextInput label="Title" control={control} name="title" />
      <SpacerFixed />
      <TextInput label="Description" control={control} name="description" />
      <SpacerFixed />
      <Button
        title={defaultValues ? "Update" : "Create"}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  wrapper: {
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    backgroundColor: "white",
  },
});
