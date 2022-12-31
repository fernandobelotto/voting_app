import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import { Container } from "../components/Container";
import { PollForm } from "../components/PollForm";
import { SpacerFixed } from "../components/SpacerFixed";
import { RootStackParamList } from "../routes/MainStack";
import { useGetPollByIdQuery } from "../store/apis/pool.api";

type Props = NativeStackScreenProps<RootStackParamList, "NewPollDetailScreen">;

export const NewPollDetailScreen = ({ route }: Props) => {
  return (
    <Container>
      <SpacerFixed />
      <PollForm />
    </Container>
  );
};
