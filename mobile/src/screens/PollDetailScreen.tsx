import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import { Container } from "../components/Container";
import { PollForm } from "../components/PollForm";
import { SpacerFixed } from "../components/SpacerFixed";
import { RootStackParamList } from "../routes/MainStack";
import { useGetPollByIdQuery } from "types";

type Props = NativeStackScreenProps<RootStackParamList, "PollDetailScreen">;

export const PollDetailScreen = ({ route }: Props) => {
  const id = route?.params?.id;

  const { data: post, isLoading, isError, error } = useGetPollByIdQuery(id);

  if (isError) {
    return <Text>Error... {JSON.stringify(error)} </Text>;
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container>
      <SpacerFixed />
      <PollForm defaultValues={post} />
    </Container>
  );
};
