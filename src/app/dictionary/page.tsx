"use client";
import * as React from "react";
import { HomePage } from "@/components/dictionary/HomePage";
import StoreProvider from "@/redux-config/StoreProvider";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/redux-config/global-store";

const Page = ({ session }) => {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <PersistGate loading={null} persistor={persistor}>
          <HomePage />
        </PersistGate>
      </StoreProvider>
    </SessionProvider>
  );
};

export default Page;
