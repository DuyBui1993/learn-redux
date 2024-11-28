"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeDetail from "@/components/dictionary/detail-dictionary/Home-Detail";
const Detail = () => {
  const queryClient = new QueryClient();
  return (
    <div className="h-screen">
      <QueryClientProvider client={queryClient}>
        <HomeDetail />
      </QueryClientProvider>
    </div>
  );
};

export default Detail;
