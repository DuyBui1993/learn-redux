"use client";
import * as React from "react";
import { SynonymsAntonyms } from "@/components/dictionary/detail-dictionary/synonyms-antonyms-detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DetailHeader } from "@/components/dictionary/detail-dictionary/detail-header";

const SynonymsAntonymsDetail = () => {
  const queryClient = new QueryClient();
  return (
    <div className="h-screen">
      <QueryClientProvider client={queryClient}>
        <DetailHeader />
        <SynonymsAntonyms />
      </QueryClientProvider>
    </div>
  );
};
export default SynonymsAntonymsDetail;
