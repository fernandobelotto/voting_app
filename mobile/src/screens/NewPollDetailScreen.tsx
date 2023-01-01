import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Container } from "../components/Container";
import { PollForm } from "../components/PollForm";
import { SpacerFixed } from "../components/SpacerFixed";
import { RootStackParamList } from "../routes/MainStack";

export const NewPollDetailScreen = () => {
  return (
    <Container>
      <SpacerFixed />
      <PollForm />
    </Container>
  );
};
