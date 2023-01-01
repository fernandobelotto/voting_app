import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../routes/MainStack";
import {
  useDeletePollByIdMutation,
  useDownvoteMutation,
  useUpvoteMutation,
} from "types";
import { Poll } from "types";
import { Button } from "./Button";
import { SpacerFixed, SpacerHorizontal } from "./SpacerFixed";

type Props = {
  item: Poll;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "PollsScreen",
    undefined
  >;
};

export function PollItem({ item, navigation }: Props) {
  const [deletePoll] = useDeletePollByIdMutation();

  const [upVotePoll, { isLoading: isLoadingUpvote }] = useUpvoteMutation();
  const [downVotePoll, { isLoading: isLoadingDownvote }] =
    useDownvoteMutation();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.simpleRow}>
          <Button
            color="white"
            bg="#e53e3e"
            onPress={() => deletePoll(item.id)}
          >
            Delete
          </Button>
          <SpacerHorizontal />

          <Button
            color="white"
            bg="#38A169"
            onPress={() =>
              navigation.navigate("PollDetailScreen", {
                id: item.id,
              })
            }
          >
            Edit
          </Button>
        </View>
      </View>
      <SpacerFixed />
      <View style={styles.row}>
        <Button
          bg="#3182ce"
          color="white"
          onPress={() => upVotePoll(item.id)}
          disabled={isLoadingUpvote}
        >
          {`${item.upVotes} upvotes`}
        </Button>
        <Button
          disabled={isLoadingDownvote}
          onPress={() => downVotePoll(item.id)}
        >
          {`${item.downVotes} downvotes`}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    overflow: "hidden",
    flex: 1,
    alignItems: "flex-start",
  },
  row: {
    flex: 1,
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  simpleRow: {
    flexDirection: "row",
  },
  description: {
    width: "100%",
    marginTop: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
