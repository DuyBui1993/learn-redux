import { PATH_URL } from "@/components/utils/dictionaryUtils";

export const fetchWordData = async (search) => {
  const res = await fetch(`${PATH_URL}/search?q=${search}`);

  if (!res.ok) {
    throw new Error("Failed to fetch word data");
  }

  return res.json();
};
