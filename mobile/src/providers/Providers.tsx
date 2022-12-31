import { NavigationContainer } from "@react-navigation/native";
import React, { PropsWithChildren } from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";
type Props = PropsWithChildren<{}>;

export const Providers = ({ children }: Props) => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>{children}</NavigationContainer>
    </ReduxProvider>
  );
};
