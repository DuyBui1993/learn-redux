"use client";
import * as React from "react";
import { References } from "@/components/dictionary/detail-dictionary/references-detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DetailHeader } from "@/components/dictionary/detail-dictionary/detail-header";

const ReferencesDetail = () => {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <DetailHeader />
        <References />
      </QueryClientProvider>
    </div>
  );
};
export default ReferencesDetail;
