import React from "react";
import { Providers } from "./providers/Providers";
import { Routes } from "./routes/MainStack";

export const Root = () => {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
};
