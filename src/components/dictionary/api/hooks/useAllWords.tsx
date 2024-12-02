import { useQuery } from "@tanstack/react-query";

import { PATH_URL } from "@/components/utils/dictionaryUtils";

const fetchAllWords = async ({ page = 0, limit = 10, search }) => {
  const url = `${PATH_URL}/search?page=${page}&limit=${limit}${search ? `&q=${search}` : ""}`;
  const response = await fetch(url, { cache: "no-cache" });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.statusText}`);
  }
  return response.json();
};

export const useAllWords = ({ search, page, limit = 10 }) => {
  return useQuery({
    queryKey: ["allWords", page, limit, search],
    queryFn: () => fetchAllWords({ page, limit, search }),
  });
};
