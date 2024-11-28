"use client";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Idioms } from "@/components/dictionary/detail-dictionary/idioms-detail";
import { DetailHeader } from "@/components/dictionary/detail-dictionary/detail-header";

const IdiomsDetail = () => {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <DetailHeader />
        <Idioms />
      </QueryClientProvider>
    </div>
  );
};
export default IdiomsDetail;
