import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, RefreshControl, Text } from "react-native";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import Heading from "../components/Heading";
import { PollItem } from "../components/PollItem";
import { SpacerFixed } from "../components/SpacerFixed";
import { RootStackParamList } from "../routes/MainStack";
import { useGetAllPollsQuery } from "../store/apis/pool.api";

type Props = NativeStackScreenProps<RootStackParamList, "PollsScreen">;

export const PollsScreen = ({ navigation }: Props) => {
  const {
    data: polls,
    isLoading,
    error,
    refetch,
  } = useGetAllPollsQuery(undefined, {
    pollingInterval: 3000,
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error {JSON.stringify(error)}</Text>;
  }

  return (
    <Container>
      <SpacerFixed />
      <Heading>Voting App</Heading>
      <SpacerFixed />
      <Text style={{ textAlign: "center" }}>
        Voting web app with React and Nestjs
      </Text>
      <SpacerFixed />
      <Button
        bg="#718096"
        color="white"
        onPress={() => {
          navigation.navigate("NewPollDetailScreen");
        }}
      >
        Create Poll
      </Button>
      <FlatList
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
        data={polls}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <>
              <SpacerFixed />
              <PollItem item={item} navigation={navigation} />
            </>
          );
        }}
      />
    </Container>
  );
};
