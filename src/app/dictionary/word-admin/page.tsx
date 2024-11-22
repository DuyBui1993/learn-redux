"use client";
import { WordAdmin } from "@/components/dictionary/api/words/WordAdmin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const AdminPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WordAdmin />
    </QueryClientProvider>
  );
};
export default AdminPage;
