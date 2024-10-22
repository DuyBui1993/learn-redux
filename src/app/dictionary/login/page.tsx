"use client";
import { Login } from "@/components/dictionary/account/login";
import { SessionProvider } from "next-auth/react";
import StoreProvider from "@/redux-config/StoreProvider";
import * as React from "react";

const LoginHome = ({ session }) => {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Login />
      </StoreProvider>
    </SessionProvider>
  );
};
export default LoginHome;
