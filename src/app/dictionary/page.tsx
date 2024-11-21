"use client";
import * as React from "react";
import { HomePage } from "@/components/dictionary/homepage/HomePage";
import StoreProvider from "@/redux-config/StoreProvider";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/redux-config/global-store";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const Page = ({ session }) => {
    const queryClient = new QueryClient()
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
                <HomePage />
            </QueryClientProvider>
        </PersistGate>
      </StoreProvider>
    </SessionProvider>
  );
};

export default Page;
