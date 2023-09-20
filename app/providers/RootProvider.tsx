"use client";
import React, { FC, PropsWithChildren } from "react";
import NextAuthProvider from "./NextAuthProvider";

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
  return <NextAuthProvider>{children}</NextAuthProvider>;
};

export default RootProvider;
