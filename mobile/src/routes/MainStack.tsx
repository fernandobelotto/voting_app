import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PollsScreen } from "../screens/PollsScreen";
import { PollDetailScreen } from "../screens/PollDetailScreen";
import { NewPollDetailScreen } from "../screens/NewPollDetailScreen";

export type RootStackParamList = {
  PollsScreen: undefined;
  PollDetailScreen: { id: number } | undefined;
  NewPollDetailScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PollsScreen" component={PollsScreen} />
      <Stack.Screen name="PollDetailScreen" component={PollDetailScreen} />
      <Stack.Screen
        name="NewPollDetailScreen"
        component={NewPollDetailScreen}
      />
    </Stack.Navigator>
  );
};
